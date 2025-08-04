import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { raffles, raffleTickets, users } from '@/lib/db/schema';
import { desc, eq, and, gte } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const make = searchParams.get('make');
    const search = searchParams.get('search');

    let query = db
      .select({
        raffle: raffles,
        seller: {
          id: users.id,
          name: users.name,
          email: users.email,
        },
      })
      .from(raffles)
      .leftJoin(users, eq(raffles.sellerId, users.id))
      .where(
        and(
          eq(raffles.isActive, true),
          gte(raffles.drawDate, new Date())
        )
      )
      .orderBy(desc(raffles.createdAt));

    const results = await query;

    // Filter results based on search parameters
    let filteredResults = results;

    if (make && make !== 'all') {
      filteredResults = filteredResults.filter(
        result => result.raffle.make.toLowerCase() === make.toLowerCase()
      );
    }

    if (search) {
      filteredResults = filteredResults.filter(
        result => 
          result.raffle.title.toLowerCase().includes(search.toLowerCase()) ||
          result.raffle.make.toLowerCase().includes(search.toLowerCase()) ||
          result.raffle.model.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Get ticket counts for each raffle
    const rafflesWithTickets = await Promise.all(
      filteredResults.map(async (result) => {
        const ticketCount = await db
          .select({ count: raffleTickets.id })
          .from(raffleTickets)
          .where(eq(raffleTickets.raffleId, result.raffle.id));

        return {
          ...result.raffle,
          seller: result.seller,
          soldTickets: ticketCount.length,
          drawDate: result.raffle.drawDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }),
        };
      })
    );

    return NextResponse.json(rafflesWithTickets);
  } catch (error) {
    console.error('Error fetching raffles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch raffles' },
      { status: 500 }
    );
  }
}