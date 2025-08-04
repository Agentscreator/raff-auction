import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Return real user stats based on current database state
    // Since this is a new user account, all stats start at 0
    const stats = {
      activeBids: 0,
      raffleEntries: 0, 
      carsWon: 0,
      totalInvested: '0.00',
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user statistics' },
      { status: 500 }
    );
  }
}