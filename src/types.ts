import { IBook, IPerson } from "./interfaces";

export type BookProperties = keyof IBook;
export type PersonBook = IPerson & IBook;
export type BookOrUndefined = IBook | undefined;
