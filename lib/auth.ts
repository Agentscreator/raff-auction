import bcrypt from 'bcryptjs';
import { db } from './db';
import { users, type User } from './db/schema';
import { eq } from 'drizzle-orm';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export async function createUser(email: string, password: string, name?: string): Promise<User> {
  const hashedPassword = await hashPassword(password);
  
  const [user] = await db.insert(users).values({
    email,
    password: hashedPassword,
    name,
  }).returning();
  
  return user;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return user || null;
}

export async function getUserById(id: number): Promise<User | null> {
  const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return user || null;
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const user = await getUserByEmail(email);
  if (!user) return null;
  
  const isValid = await verifyPassword(password, user.password);
  return isValid ? user : null;
}