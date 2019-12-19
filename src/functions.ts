import { IBook, LibMgrCallback } from "./interfaces";
import { Category } from "./enums";
import { BookOrUndefined, BookProperties } from "./types";

export const getAllBooks = (): readonly IBook[] => {
  const books: readonly IBook[] = <const>[
    {
      id: 1,
      title: "Refactoring JavaScript",
      author: "Evan Burchard",
      available: true,
      category: Category.JavaScript
    },
    {
      id: 2,
      title: "JavaScript Testing",
      author: "Liang Yuxian Eugene",
      available: false,
      category: Category.JavaScript
    },
    {
      id: 3,
      title: "CSS Secrets",
      author: "Lea Verou",
      available: true,
      category: Category.CSS
    },
    {
      id: 4,
      title: "Mastering JavaScript Object-Oriented Programming",
      author: "Andrea Chiarelli",
      available: true,
      category: Category.JavaScript
    }
  ];
  return books;
};

export const logFirstAvailable = (
  booksArr: readonly IBook[] = getAllBooks()
): void => {
  const booksQuantity = booksArr.length;
  const firstAvailable = booksArr.find(el => el.available).title;

  console.log("books quantity", booksQuantity);
  console.log("first available book", firstAvailable);
};

export const getBookTitlesByCategory = (
  category: Category = Category.JavaScript
): string[] => {
  const books = getAllBooks();

  const booksByCategory = books
    .filter(book => book.category === category)
    .map(book => book.title);

  return booksByCategory;
};

export const logBookTitles = (titles: string[]): void => {
  console.log(titles);
};

export const getBookAuthorByIndex = (index: number): [string, string] => {
  const books = getAllBooks();
  const { title, author } = books[index];

  return [title, author];
};

// export const calcTotalPages = (): bigint => {
//   const data = <const>[
//     { lib: "libName1", books: 1_000_000_000, avgPagesPerBook: 250 },
//     { lib: "libName2", books: 5_000_000_000, avgPagesPerBook: 300 },
//     { lib: "libName3", books: 3_000_000_000, avgPagesPerBook: 280 }
//   ];

//   let pagesQuantity = data.reduce(
//     (acc: bigint, val) => acc + BigInt(val.books) * BigInt(val.avgPagesPerBook),
//     0n
//   );

//   return pagesQuantity;
// };

export const getBookById = (id: number): BookOrUndefined => {
  const books = getAllBooks();
  return books.find(book => book.id === id);
};

export const createCustmerID = (name: string, id: number): string => {
  return name + id;
};

export const createCustomer = (
  name: string,
  age?: number,
  city?: string
): void => {
  console.log(name);
  age && console.log(age);
  city && console.log(city);
};

export const checkoutBooks = (
  customer: string,
  ...bookIDs: number[]
): string[] => {
  console.log(customer);
  const titles: string[] = [];
  bookIDs.forEach(
    el =>
      getBookById(el) &&
      getBookById(el).available &&
      titles.push(getBookById(el).title)
  );

  return titles;
};

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
  const books = getAllBooks();
  if (args.length === 0) {
    return [];
  } else if (args.length === 1) {
    const arg = args[0];

    if (typeof arg === "string") {
      return books.filter(book => book.author === arg).map(book => book.title);
    } else if (typeof arg === "boolean") {
      return books
        .filter(book => book.available === arg)
        .map(book => book.title);
    }
  } else if (args.length === 2) {
    const id = args[0];
    const available = args[1];

    if (typeof id === "number" && typeof available === "boolean") {
      return books
        .filter(book => book.id === id && book.available === available)
        .map(book => book.title);
    }
  }
}

export function assertStringValue(value: any): asserts value is string {
  if (typeof value !== "string") {
    // throw new Error("value should have been a string");
  }
}

export function bookTitleTransform(title: any) {
  assertStringValue(title);
  return [...title].reverse().join("");
}

export function printBook(book: IBook): void {
  console.log(`${book.title} by ${book.author}`);
}

export const getBookProp = (book: IBook, prop: BookProperties): any => {
  if (typeof book[prop] === "function") {
    return (book[prop] as Function).name;
  }
};

// Task 07.01

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.slice(2);
}

// Task 09.01

export function getBooksByCategory(
  category: Category,
  callback: LibMgrCallback
) {
  setTimeout(() => {
    try {
      const titles = getBookTitlesByCategory(category);
      if (titles.length > 0) {
        callback(null, titles);
      } else {
        throw new Error("No Books Found");
      }
    } catch (error) {
      callback(error, null);
    }
  }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
  if (err) {
    console.log(`Error message: ${err.message}`);
  } else {
    console.log(titles);
  }
}

export function getBooksByCategoryPromise(
  category: Category
): Promise<string[]> {
  const p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const titles = getBookTitlesByCategory(category);
      if (titles.length > 0) {
        resolve(titles);
      } else {
        reject("No Books Found");
      }
    }, 2000);
  });

  return p;
}

export async function logSearchResults(category: Category): Promise<any> {
  const titles = await getBooksByCategoryPromise(category);
  console.log(titles);
}
