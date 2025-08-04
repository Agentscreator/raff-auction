import { pgTable, serial, text, varchar, integer, timestamp, decimal, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const auctions = pgTable('auctions', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  make: varchar('make', { length: 100 }).notNull(),
  model: varchar('model', { length: 100 }).notNull(),
  year: integer('year').notNull(),
  mileage: integer('mileage'),
  engine: varchar('engine', { length: 255 }),
  transmission: varchar('transmission', { length: 255 }),
  condition: varchar('condition', { length: 100 }),
  location: varchar('location', { length: 255 }),
  startingBid: decimal('starting_bid', { precision: 10, scale: 2 }).notNull(),
  currentBid: decimal('current_bid', { precision: 10, scale: 2 }).notNull(),
  buyNowPrice: decimal('buy_now_price', { precision: 10, scale: 2 }),
  imageUrl: text('image_url'),
  sellerId: integer('seller_id').references(() => users.id),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const raffles = pgTable('raffles', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  make: varchar('make', { length: 100 }).notNull(),
  model: varchar('model', { length: 100 }).notNull(),
  year: integer('year').notNull(),
  estimatedValue: decimal('estimated_value', { precision: 10, scale: 2 }).notNull(),
  ticketPrice: decimal('ticket_price', { precision: 10, scale: 2 }).notNull(),
  totalTickets: integer('total_tickets').notNull(),
  soldTickets: integer('sold_tickets').default(0),
  imageUrl: text('image_url'),
  sellerId: integer('seller_id').references(() => users.id),
  drawDate: timestamp('draw_date').notNull(),
  isActive: boolean('is_active').default(true),
  winnerId: integer('winner_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const bids = pgTable('bids', {
  id: serial('id').primaryKey(),
  auctionId: integer('auction_id').references(() => auctions.id).notNull(),
  bidderId: integer('bidder_id').references(() => users.id).notNull(),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const raffleTickets = pgTable('raffle_tickets', {
  id: serial('id').primaryKey(),
  raffleId: integer('raffle_id').references(() => raffles.id).notNull(),
  buyerId: integer('buyer_id').references(() => users.id).notNull(),
  ticketNumber: integer('ticket_number').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Auction = typeof auctions.$inferSelect;
export type NewAuction = typeof auctions.$inferInsert;
export type Raffle = typeof raffles.$inferSelect;
export type NewRaffle = typeof raffles.$inferInsert;
export type Bid = typeof bids.$inferSelect;
export type NewBid = typeof bids.$inferInsert;
export type RaffleTicket = typeof raffleTickets.$inferSelect;
export type NewRaffleTicket = typeof raffleTickets.$inferInsert;