showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

enum Category {
  JavaScript,
  CSS,
  HTML,
  TypeScript,
  Angular
}

interface IBook {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
}

const getAllBooks = (): readonly IBook[] => {
  const books = <const>[
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

const logFirstAvailable = (
  booksArr: readonly IBook[] = getAllBooks()
): void => {
  const booksQuantity = booksArr.length;
  const firstAvailable = booksArr.find(el => el.available).title;

  console.log("books quantity", booksQuantity);
  console.log("first available book", firstAvailable);
};

logFirstAvailable(getAllBooks());

const getBookTitlesByCategory = (
  category: Category = Category.JavaScript
): string[] => {
  const books = getAllBooks();

  const booksByCategory = books
    .filter(book => book.category === category)
    .map(book => book.title);

  return booksByCategory;
};

const logBookTitles = (titles: string[]): void => {
  console.log(titles);
};

const titles = getBookTitlesByCategory(Category.JavaScript);

logBookTitles(titles);

const getBookAuthorByIndex = (index: number): [string, string] => {
  const books = getAllBooks();
  const { title, author } = books[index];

  return [title, author];
};

getBookAuthorByIndex(1);

const calcTotalPages = (): bigint => {
  const data = <const>[
    { lib: "libName1", books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: "libName2", books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: "libName3", books: 3_000_000_000, avgPagesPerBook: 280 }
  ];

  let pagesQuantity = data.reduce(
    (acc: bigint, val) => acc + BigInt(val.books) * BigInt(val.avgPagesPerBook),
    0n
  );

  return pagesQuantity;
};

// Task 03.01

// const titles = getBookTitlesByCategory(Category.JavaScript);
titles.forEach(el => console.log(el));

const getBookById = (id: number): IBook => {
  const books = getAllBooks();
  return books.find(book => book.id === id);
};

getBookById(1);

// Task 03.02

const createCustmerID = (name: string, id: number): string => {
  return name + id;
};
const myID: string = createCustmerID("Ann", 10);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => id + name;
idGenerator = createCustmerID;

// Task 03.03

const createCustomer = (name: string, age?: number, city?: string): void => {
  console.log(name);
  age && console.log(age);
  city && console.log(city);
};

createCustomer("Ann");
createCustomer("Ann", 20);
createCustomer("Ann", 20, "Moscow");

getBookTitlesByCategory();

const checkoutBooks = (customer: string, ...bookIDs: number[]): string[] => {
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

const myBooks = checkoutBooks("Ann", 1, 2, 4);
