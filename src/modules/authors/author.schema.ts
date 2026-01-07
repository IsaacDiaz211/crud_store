import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const author = sqliteTable("authors_table", {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text().notNull()
});

export type Author = InferSelectModel<typeof author>;
export type NewAuthor = InferInsertModel<typeof author>;