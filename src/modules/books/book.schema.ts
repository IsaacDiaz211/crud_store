import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { author } from "../authors/author.schema";

export const book = sqliteTable("books_table", {
  id: integer({mode: 'number'}).primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  price: text().notNull(),
  description: text().notNull().unique(),
  author: integer({mode: 'number'}).references(() => author.id),
  publisher: text().notNull(),
  language: text().notNull(),
  stock: integer({mode: 'number'}).notNull(),
  imageCover: text().notNull(),
  deleted: integer({mode: 'boolean'}).default(false)
});