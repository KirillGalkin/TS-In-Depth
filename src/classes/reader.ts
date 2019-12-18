import { IBook } from "../interfaces";

export class Reader {
  name: string;
  books: IBook[];

  take(book: IBook): void {
    this.books.push(book);
  }
}
