import React from "react";
import { useLibraryStore } from "../store/useLibraryStore";

const ReadingList: React.FC = () => {
  const { readingList, removeFromReadingList } = useLibraryStore();

  if (readingList.length === 0) {
    return <div className="empty">Sin libros en la lista de lectura</div>;
  }

  return (
    <div>
      {readingList.map((r) => (
        <div className="reading-item" key={r.book.ISBN}>
          <img src={r.book.cover} alt={r.book.title} />
          <div>
            <div style={{ color: "#fff", fontWeight: 700 }}>{r.book.title}</div>
            <div className="ri-meta">
              {r.book.author.name} · {r.book.pages} pág · {r.book.genre}
            </div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <button
              className="btn btn-remove"
              onClick={() => removeFromReadingList(r.book.ISBN)}
            >
              Quitar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadingList;
