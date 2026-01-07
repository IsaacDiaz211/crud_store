import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const payMethod = sqliteTable("pay_methods_table", {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  surcharge: real().notNull()
});