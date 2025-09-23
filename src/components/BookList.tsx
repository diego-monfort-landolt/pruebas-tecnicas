import React from "react";
import BookCard from "./BookCard";
import type { LibraryBook } from "../store/useLibraryStore";

const BookList: React.FC<{ books: LibraryBook[] }> = ({ books }) => {
  return (
    <div className="book-grid" role="list">
      {books.map((b) => (
        <div role="listitem" key={b.book.ISBN}>
          <BookCard b={b} />
        </div>
      ))}
    </div>
  );
};
export default BookList;