//import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema:  ['./src/modules/authors/author.schema.ts', './src/modules/books/book.schema.ts', 
            './src/modules/genres/genre.schema.ts', './src/modules/payMethod/payMethod.schema.ts',
            './src/modules/sales/sale.schema.ts', './src/modules/sales/detailSale.schema.ts',
            './src/modules/users/user.schema.ts'],
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
});
