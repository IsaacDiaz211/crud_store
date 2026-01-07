import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("users_table", {
  id: integer({mode: 'number'}).primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  lastname: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
  role: text().$type<"client" | "admin">().default("client"),
  deleted: integer({mode: 'boolean'}).default(false)
});
