import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { author } from "../author.schema";
import type { Author } from "../author.schema"

async function getAuthors(): Promise<Author[]> {
    return await db.select().from(author);
}

async function getAuthor(id_author: number): Promise<Author | null> {
    let response = await db.select().from(author).where(eq(author.id, id_author))
    return response[0];
}

export { getAuthors, getAuthor }