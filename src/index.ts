import { Hono } from 'hono';
import books from './modules/books/book.router'

const app = new Hono()

app.route('/books', books)
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
