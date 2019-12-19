import { Category } from "./enums";

interface IBook {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: IDamageLogger;
}

interface IDamageLogger {
  (param: string): void;
}

interface IPerson {
  name: string;
  email: string;
}

interface Author extends IPerson {
  numBooksPublished: number;
}

interface Librarian extends IPerson {
  department: string;
  assistCustomer: (custName: string) => void;
}

interface Magazine {
  title: string;
  publisher: string;
}

interface ShelfItem {
  title: string;
}

export {
  IBook,
  IDamageLogger as Logger,
  IPerson,
  Author,
  Librarian,
  Magazine,
  ShelfItem
};
