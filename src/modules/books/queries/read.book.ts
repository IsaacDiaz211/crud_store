import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { books } from "../book.schema";
import type { Book } from "../book.schema"

async function getBooks(): Promise<Book[]> {
    return await db.select().from(books);
}

async function getBook(id_book: number): Promise<Book | null> {
    let response = await db.select().from(books).where(eq(books.id, id_book))
    return response[0];
}

export { getBooks, getBook }
