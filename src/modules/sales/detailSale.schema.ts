import { integer, sqliteTable, real } from "drizzle-orm/sqlite-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { books } from "../books/book.schema";
import { sales } from "./sale.schema";

export const detailSales = sqliteTable("detail_sales_table", {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  sale_id: integer({ mode: 'number' }).references(() => sales.id),
  amount_unity: real().notNull(),
  book_id: integer({mode: 'number'}).references(() => books.id),
  price_unity: real().notNull(),
  unities: integer({ mode: 'number' })
});

export type DetailSale = InferSelectModel<typeof detailSales>;
export type NewDetailSale = InferInsertModel<typeof detailSales>;