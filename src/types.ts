import { IBook, IPerson, Author } from "./interfaces";

export type BookProperties = keyof IBook;
export type PersonBook = IPerson & IBook;
export type BookOrUndefined = IBook | undefined;
export type BookRequiredFields = Required<IBook>;
export type UpdatedBook = Partial<IBook>;
export type AuthorWoEmail = Omit<Author, "email">;
export type createCustomerFunctionType = (
  name: string,
  age?: number,
  city?: string
) => void;
