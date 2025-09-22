import React from "react";
import type { LibraryBook } from "../store/useLibraryStore";
import { useLibraryStore } from "../store/useLibraryStore";
import "../styles/global.css"

const BookCard: React.FC<{ b: LibraryBook }> = ({ b }) => {
  const { addToReadingList, removeFromReadingList, isInReadingList } =
    useLibraryStore();
  const inList = isInReadingList(b.book.ISBN);

  return (
    <div className="book-card">
      <img className="book-cover" src={b.book.cover} alt={b.book.title} />
      <div className="book-title">{b.book.title}</div>
      <div className="book-meta">
        {b.book.genre} · {b.book.pages} pág
      </div>
      {inList ? (
        <button
          className="btn btn-remove"
          onClick={() => removeFromReadingList(b.book.ISBN)}
          aria-label={`Quitar ${b.book.title}`}
        >
          Quitar
        </button>
      ) : (
        <button
          className="btn btn-add"
          onClick={() => addToReadingList(b)}
          aria-label={`Añadir ${b.book.title}`}
        >
          Añadir
        </button>
      )}
    </div>
  );
};

export default BookCard;
