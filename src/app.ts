import {
  logFirstAvailable,
  getAllBooks,
  getBookTitlesByCategory,
  logBookTitles,
  getBookAuthorByIndex,
  getBookById,
  createCustmerID,
  createCustomer,
  getTitles,
  bookTitleTransform,
  printBook,
  getBookProp,
  purge
} from "./functions";
import { Category } from "./enums";
import { IBook, Author, Librarian, Logger, Magazine } from "./interfaces";
import {
  PersonBook,
  BookRequiredFields,
  UpdatedBook,
  createCustomerFunctionType
} from "./types";
import { ReferenceItem, UniversityLibrarian, RefBook, Shelf } from "./classes";
import Encyclopedia from "./classes/encyclopedia";

showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

logFirstAvailable(getAllBooks());

const titles = getBookTitlesByCategory(Category.JavaScript);

logBookTitles(titles);

getBookAuthorByIndex(1);

// Task 03.01

// const titles = getBookTitlesByCategory(Category.JavaScript);
titles.forEach(el => console.log(el));

getBookById(1);

// Task 03.02

const myID: string = createCustmerID("Ann", 10);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => id + name;
idGenerator = createCustmerID;

// Task 03.03

createCustomer("Ann");
createCustomer("Ann", 20);
createCustomer("Ann", 20, "Moscow");

getBookTitlesByCategory();

// const myBooks = checkoutBooks("Ann", ...[1, 2, 4]);
// console.log(myBooks);

// Task 03.04

const checkedOutBooks = getTitles("Evan Burchard");

// Task 03.05

bookTitleTransform(getAllBooks()[0].title);
bookTitleTransform(10);

// Task 04.01

const myBook: IBook = {
  id: 5,
  title: "Colors, Backgrounds, and Gradients",
  author: "Eric A. Meyer",
  available: true,
  category: Category.CSS,
  pages: 200,
  markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

printBook(myBook);
myBook.markDamaged("missing back cover");

// Task 04.02

let logDamage: Logger; //DamageLogger

logDamage = (reason: string) => console.log(`Damage logger: ${reason}`);
logDamage("test");

// Task 04.03

const favouriteAuthor: Author = {
  name: "test",
  email: "test",
  numBooksPublished: 1
};

const favouriteLibrarian: Librarian = {
  name: "test",
  email: "test",
  department: "test",
  assistCustomer: test => console.log(`${test}`)
};

// Task 04.0
let offer: any;
offer = {
  book: { title: "EssentialTypeScript" }
};
console.log(offer?.magazine);

// Task 04.05

getBookProp(getAllBooks()[0], "title");
getBookProp(getAllBooks()[0], "markDamaged");
// getBookProp(getAllBooks()[0], 'isbn');

// Task 05.01

// const ref: ReferenceItem = new ReferenceItem("TS", 2012);
// ref.printItem();
// ref.publisher = "Popular Book Publisher";
// console.log(ref.publisher);

// Task 05.02

// const refBook: RefBook = new RefBook("Large Book", 2019, 5);
// refBook.printItem();

// Task 05.03

// const refBook: Encyclopedia = new Encyclopedia("Large Book", 2019, 5);
// refBook.printCitation();

// Task 05.04

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = "Anna";
favoriteLibrarian.assistCustomer("Boris");

// Task 05.05

// console.log(PersonBook);

// Task 06.03
const refBook: RefBook = new RefBook("Large Book", 2019, 5);
console.log(refBook);
refBook.printItem();

// Task 06.05

import("./classes").then(module => {
  const reader = new module.Reader();
  console.log(reader);
  reader.name = "Anna";
  reader.take(getAllBooks()[0]);
});

// Task 07.01

const inventory: Array<IBook> = [
  {
    id: 10,
    title: "The C Programming Language",
    author: "K & R",
    available: true,
    category: Category.Software
  },
  {
    id: 11,
    title: "Code Complete",
    author: "Steve McConnell",
    available: true,
    category: Category.Software
  },
  {
    id: 12,
    title: "8-Bit Graphics with Cobol",
    author: "A. B.",
    available: true,
    category: Category.Software
  },
  {
    id: 13,
    title: "Cool autoexec.bat Scripts!",
    author: "C. D.",
    available: true,
    category: Category.Software
  }
];

// const result = purge<IBook>(inventory);
// console.log(result);

// const result2 = purge([1, 2, 3, 4]);

// Task 07.02
const bookShelf: Shelf<IBook> = new Shelf<IBook>();
inventory.forEach(book => bookShelf.add(book));

const firstBook = bookShelf.getFirst();
console.log(firstBook.title);

const magazines: Array<Magazine> = [
  { title: "Programming Language Monthly", publisher: "Code Mags" },
  { title: "Literary Fiction Quarterly", publisher: "College Press" },
  { title: "Five Points", publisher: "GSU" }
];

const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
const firstMagazine = magazineShelf.getFirst();
console.log(firstMagazine.title);

// Task 07.03

bookShelf.printTitles();
const mag = magazineShelf.find("Five Points");
console.log(mag);

// Task 07.04

// const book: BookRequiredFields = {
//   id: 1,
//   title: "Refactorung",
//   author: "unknown",
//   available: false,
//   pages: 500,
//   category: Category.TypeScript,
//   markDamaged: null
// };

const book: UpdatedBook = {
  id: 1
};

const params: Parameters<createCustomerFunctionType> = ["Anna"];
createCustomer(...params);

// Task 08.01

const universityLibrarian = new UniversityLibrarian();
// Task 08.02

// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = "Anna";
// fLibrarian["printLibrarian"]();
// (fLibrarian as any).printLibrarian()

// Task 08.03

// const fLibrarian = new UniversityLibrarian();
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// Task 08.04

// const enc = new Encyclopedia("Title", 2019, 30);

// enc.printItem();

//Task 08.05

// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = "Anna";
// fLibrarian.assistCustomer("Boris");

// Task 08.06

// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = "Anna";
// console.log(fLibrarian.name);

// Task 08.07
const enc = new Encyclopedia("Title", 2019, 30);

enc.copies = 10;
console.log(enc.copies);
