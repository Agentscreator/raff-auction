import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

async function migrateUsers() {
  console.log('Migrating users table...');

  try {
    // First, drop the existing users table and recreate with new schema
    await sql`DROP TABLE IF EXISTS "users" CASCADE`;
    
    // Recreate users table with username
    await sql`
      CREATE TABLE "users" (
        "id" serial PRIMARY KEY NOT NULL,
        "username" varchar(50) NOT NULL,
        "email" varchar(255),
        "password" varchar(255) NOT NULL,
        "name" varchar(255),
        "created_at" timestamp DEFAULT now(),
        "updated_at" timestamp DEFAULT now(),
        CONSTRAINT "users_username_unique" UNIQUE("username"),
        CONSTRAINT "users_email_unique" UNIQUE("email")
      )
    `;

    console.log('Users table migrated successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
}

migrateUsers().catch(console.error);