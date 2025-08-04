import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auctions, bids, users } from '@/lib/db/schema';
import { desc, eq, and, gte } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const make = searchParams.get('make');
    const type = searchParams.get('type');
    const search = searchParams.get('search');

    let query = db
      .select({
        auction: auctions,
        seller: {
          id: users.id,
          name: users.name,
          email: users.email,
        },
      })
      .from(auctions)
      .leftJoin(users, eq(auctions.sellerId, users.id))
      .where(
        and(
          eq(auctions.isActive, true),
          gte(auctions.endDate, new Date())
        )
      )
      .orderBy(desc(auctions.createdAt));

    const results = await query;

    // Filter results based on search parameters
    let filteredResults = results;

    if (make && make !== 'all') {
      filteredResults = filteredResults.filter(
        result => result.auction.make.toLowerCase() === make.toLowerCase()
      );
    }

    if (search) {
      filteredResults = filteredResults.filter(
        result => 
          result.auction.title.toLowerCase().includes(search.toLowerCase()) ||
          result.auction.make.toLowerCase().includes(search.toLowerCase()) ||
          result.auction.model.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Get bid counts for each auction
    const auctionsWithBids = await Promise.all(
      filteredResults.map(async (result) => {
        const bidCount = await db
          .select({ count: bids.id })
          .from(bids)
          .where(eq(bids.auctionId, result.auction.id));

        const timeLeft = new Date(result.auction.endDate).getTime() - new Date().getTime();
        const timeLeftFormatted = formatTimeLeft(timeLeft);

        return {
          ...result.auction,
          seller: result.seller,
          bids: bidCount.length,
          timeLeft: timeLeftFormatted,
        };
      })
    );

    return NextResponse.json(auctionsWithBids);
  } catch (error) {
    console.error('Error fetching auctions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch auctions' },
      { status: 500 }
    );
  }
}

function formatTimeLeft(milliseconds: number): string {
  if (milliseconds <= 0) return 'Ended';
  
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
}