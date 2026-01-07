import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { author } from "../author.schema";
import type { NewAuthor, Author } from "../author.schema"

async function CreateAuthor(data: NewAuthor): Promise<void> {
    db.insert(author).values(data);
}

async function UpdateAuthor(data: Author) {
    await db.update(author).set(data).where(eq(author.id, data.id))
}

async function DeleteAuthor(id_author: number) {
    await db.delete(author).where(eq(author.id, id_author))
}

export { CreateAuthor, UpdateAuthor, DeleteAuthor }