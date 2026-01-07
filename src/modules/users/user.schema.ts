import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const user = sqliteTable("users_table", {
  id: integer({mode: 'number'}).primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  lastname: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
  role: text().$type<"client" | "admin">().default("client"),
  deleted: integer({mode: 'boolean'}).default(false)
});

export type User = InferSelectModel<typeof user>;
export type NewUser = InferInsertModel<typeof user>;