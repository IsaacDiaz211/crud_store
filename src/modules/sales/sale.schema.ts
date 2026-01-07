import { integer, sqliteTable, real } from "drizzle-orm/sqlite-core";
import { payMethod } from "../payMethod/payMethod.schema";
import { user } from "../users/user.schema"

export const sale = sqliteTable("sales_table", {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  date: integer({ mode: 'timestamp' }),
  total: real().notNull(),
  pay_method_id: integer({mode: 'number'}).references(() => payMethod.id),
  user_id: integer({mode: 'number'}).references(() => user.id)
});