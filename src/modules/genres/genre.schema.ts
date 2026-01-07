import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const genre = sqliteTable("genres_table", {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text().notNull()
});

export type Genre = InferSelectModel<typeof genre>;
export type NewGenre = InferInsertModel<typeof genre>;