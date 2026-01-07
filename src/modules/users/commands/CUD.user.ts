import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { users } from "../user.schema";
import type { NewUser, User } from "../user.schema"

async function CreateUser(data: NewUser): Promise<void> {
    db.insert(users).values(data);
}

async function UpdateUser(data: User) {
    await db.update(users).set(data).where(eq(users.id, data.id))
}

async function DeleteUser(id_user: number) {
    await db.delete(users).where(eq(users.id, id_user))
}

export { CreateUser, UpdateUser, DeleteUser }
