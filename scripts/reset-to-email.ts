import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

async function resetToEmail() {
  console.log('Resetting users table to email-based authentication...');

  try {
    // Drop the existing users table and recreate with email-based schema
    await sql`DROP TABLE IF EXISTS "users" CASCADE`;
    
    // Recreate users table with original email schema
    await sql`
      CREATE TABLE "users" (
        "id" serial PRIMARY KEY NOT NULL,
        "email" varchar(255) NOT NULL,
        "password" varchar(255) NOT NULL,
        "name" varchar(255),
        "created_at" timestamp DEFAULT now(),
        "updated_at" timestamp DEFAULT now(),
        CONSTRAINT "users_email_unique" UNIQUE("email")
      )
    `;

    console.log('Users table reset to email-based authentication successfully!');
  } catch (error) {
    console.error('Reset failed:', error);
    throw error;
  }
}

resetToEmail().catch(console.error);