import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const genre = sqliteTable("genres_table", {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text().notNull()
});