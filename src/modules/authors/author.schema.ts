import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const author = sqliteTable("authors_table", {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text().notNull()
});