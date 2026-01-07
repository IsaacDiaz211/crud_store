import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { authors } from "../author.schema";
import type { NewAuthor, Author } from "../author.schema"

async function CreateAuthor(data: NewAuthor): Promise<void> {
    db.insert(authors).values(data);
}

async function UpdateAuthor(data: Author) {
    await db.update(authors).set(data).where(eq(authors.id, data.id))
}

async function DeleteAuthor(id_author: number) {
    await db.delete(authors).where(eq(authors.id, id_author))
}

export { CreateAuthor, UpdateAuthor, DeleteAuthor }