import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { users, auctions, raffles } from '../lib/db/schema';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

async function seed() {
  console.log('Seeding database...');

  // Create sample users
  const hashedPassword = await hashPassword('password123');
  
  const [user1] = await db.insert(users).values({
    email: 'demo@example.com',
    password: hashedPassword,
    name: 'Demo User',
  }).returning();

  const [user2] = await db.insert(users).values({
    email: 'seller@example.com',
    password: hashedPassword,
    name: 'Car Seller',
  }).returning();

  // Create sample auctions
  await db.insert(auctions).values([
    {
      title: '2023 BMW M4 Competition',
      description: 'Excellent condition BMW M4 with low mileage',
      make: 'BMW',
      model: 'M4 Competition',
      year: 2023,
      mileage: 8500,
      engine: '3.0L Twin-Turbo I6',
      transmission: '8-Speed Automatic',
      condition: 'Excellent',
      location: 'Los Angeles, CA',
      startingBid: '65000',
      currentBid: '68000',
      buyNowPrice: '75000',
      imageUrl: '/placeholder.svg?height=300&width=400',
      sellerId: user2.id,
      startDate: new Date(),
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      isActive: true,
    },
    {
      title: '2022 Tesla Model S Plaid',
      description: 'Top-of-the-line Tesla with incredible performance',
      make: 'Tesla',
      model: 'Model S Plaid',
      year: 2022,
      mileage: 12000,
      engine: 'Electric Tri-Motor',
      transmission: 'Single-Speed',
      condition: 'Excellent',
      location: 'San Francisco, CA',
      startingBid: '90000',
      currentBid: '95000',
      buyNowPrice: '110000',
      imageUrl: '/placeholder.svg?height=300&width=400',
      sellerId: user2.id,
      startDate: new Date(),
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
      isActive: true,
    },
  ]);

  // Create sample raffles
  await db.insert(raffles).values([
    {
      title: '2024 Ford Mustang GT',
      description: 'Brand new Mustang GT - win for just $25!',
      make: 'Ford',
      model: 'Mustang GT',
      year: 2024,
      estimatedValue: '45000',
      ticketPrice: '25',
      totalTickets: 2000,
      soldTickets: 850,
      imageUrl: '/placeholder.svg?height=300&width=400',
      sellerId: user2.id,
      drawDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
      isActive: true,
    },
    {
      title: '2023 Honda Civic Type R',
      description: 'Performance Honda Civic Type R',
      make: 'Honda',
      model: 'Civic Type R',
      year: 2023,
      estimatedValue: '42000',
      ticketPrice: '20',
      totalTickets: 2500,
      soldTickets: 1200,
      imageUrl: '/placeholder.svg?height=300&width=400',
      sellerId: user2.id,
      drawDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000), // 3 weeks from now
      isActive: true,
    },
  ]);

  console.log('Database seeded successfully!');
}

seed().catch(console.error);