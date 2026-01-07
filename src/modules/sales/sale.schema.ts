import { integer, sqliteTable, real } from "drizzle-orm/sqlite-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { payMethods } from "../payMethod/payMethod.schema";
import { users } from "../users/user.schema"

export const sales = sqliteTable("sales_table", {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  date: integer({ mode: 'timestamp' }),
  total: real().notNull(),
  pay_method_id: integer({mode: 'number'}).references(() => payMethods.id),
  user_id: integer({mode: 'number'}).references(() => users.id)
});

export type Sale = InferSelectModel<typeof sales>;
export type NewSale = InferInsertModel<typeof sales>;