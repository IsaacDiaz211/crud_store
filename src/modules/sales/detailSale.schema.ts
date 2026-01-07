import { integer, sqliteTable, real } from "drizzle-orm/sqlite-core";
import { book } from "../books/book.schema";
import { sale } from "./sale.schema";

export const detailSale = sqliteTable("detail_sales_table", {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  sale_id: integer({ mode: 'number' }).references(() => sale.id),
  amount_unity: real().notNull(),
  book_id: integer({mode: 'number'}).references(() => book.id),
  price_unity: real().notNull(),
  unities: integer({ mode: 'number' })
});