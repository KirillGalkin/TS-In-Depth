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
  title: string;
  author: string;
  available: boolean;
  category: Category;
}

const getAllBooks = (): readonly IBook[] => {
  const books = <const>[
    {
      title: "Refactoring JavaScript",
      author: "Evan Burchard",
      available: true,
      category: Category.JavaScript
    },
    {
      title: "JavaScript Testing",
      author: "Liang Yuxian Eugene",
      available: false,
      category: Category.JavaScript
    },
    {
      title: "CSS Secrets",
      author: "Lea Verou",
      available: true,
      category: Category.CSS
    },
    {
      title: "Mastering JavaScript Object-Oriented Programming",
      author: "Andrea Chiarelli",
      available: true,
      category: Category.JavaScript
    }
  ];
  return books;
};

const logFirstAvailable = (booksArr: readonly IBook[]): void => {
  const booksQuantity = booksArr.length;
  const firstAvailable = booksArr.find(el => el.available).title;

  console.log("books quantity", booksQuantity);
  console.log("first available book", firstAvailable);
};

logFirstAvailable(getAllBooks());

const getBookTitlesByCategory = (category: Category): string[] => {
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
