import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { author } from "../authors/author.schema";

export const book = sqliteTable("books_table", {
  id: integer({mode: 'number'}).primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  price: real().notNull(),
  description: text().notNull().unique(),
  author: integer({mode: 'number'}).references(() => author.id),
  publisher: text().notNull(),
  language: text().notNull(),
  stock: integer({mode: 'number'}).notNull(),
  imageCover: text().notNull(),
  deleted: integer({mode: 'boolean'}).default(false)
});

export type Book = InferSelectModel<typeof book>; // Type to read (included ID)
export type NewBook = InferInsertModel<typeof book>; // Type to create