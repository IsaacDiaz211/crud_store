import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { users } from "../user.schema";
import type { User } from "../user.schema"

async function getUsers(): Promise<User[]> {
    return await db.select().from(users);
}

async function getUser(id_user: number): Promise<User | null> {
    let response = await db.select().from(users).where(eq(users.id, id_user))
    return response[0];
}

export { getUsers, getUser }
