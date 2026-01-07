import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const payMethods = sqliteTable("pay_methods_table", {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  surcharge: real().notNull()
});

export type PayMethod = InferSelectModel<typeof payMethods>;
export type NewPayMethod = InferInsertModel<typeof payMethods>;