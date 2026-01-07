import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { books } from "../book.schema";
import type { NewBook, Book } from "../book.schema"

async function CreateBook(data: NewBook): Promise<void> {
    db.insert(books).values(data);
}

async function UpdateBook(data: Book) {
    await db.update(books).set(data).where(eq(books.id, data.id))
}

async function DeleteBook(id_book: number) {
    await db.delete(books).where(eq(books.id, id_book))
}

export { CreateBook, UpdateBook, DeleteBook }
