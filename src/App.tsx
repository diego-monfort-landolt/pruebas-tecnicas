import { useEffect, useMemo, useState } from "react";
import booksData from "./data/books.json";
import { useLibraryStore } from "./store/useLibraryStore";
import type { LibraryBook } from "./store/useLibraryStore";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import Filters from "./components/Filters";

function App() {
  const { setBooks, books, readingList } = useLibraryStore();
  const [genre, setGenre] = useState<string>("Todas");
  const [minPages, setMinPages] = useState<number>(0);

  useEffect(() => {
    setBooks(booksData.library as LibraryBook[]);
  }, [setBooks]);

  const genres = useMemo(() => {
    const setg = new Set<string>();
    books.forEach((b) => setg.add(b.book.genre));
    return ["Todas", ...Array.from(setg)];
  }, [books]);

  const filteredBooks = useMemo(() => {
    let list = books;
    if (genre !== "Todas") list = list.filter((b) => b.book.genre === genre);
    if (minPages > 0) list = list.filter((b) => b.book.pages >= minPages);
    return list;
  }, [books, genre, minPages]);

  return (
    <div className="app-container">
      <div className="panel">
        <div className="header">
          <h1>{filteredBooks.length} libros disponibles</h1>
          <div className="counts">
            <div>{readingList.length} en la lista de lectura</div>
            <div>{books.length} totales</div>
          </div>
        </div>

        <Filters
          genre={genre}
          setGenre={setGenre}
          genres={genres}
          minPages={minPages}
          setMinPages={setMinPages}
        />
        <BookList books={filteredBooks} />
      </div>
      <aside className="panel reading-panel">
        <h2 style={{ margin: "0 0 10px 0" }}>Lista de lectura</h2>
        <div className="reading-list">
          <ReadingList />
        </div>
      </aside>
    </div>
  );
}

export default App;
