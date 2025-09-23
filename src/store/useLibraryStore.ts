import { create } from "zustand";

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: {
    name: string;
    otherBooks: string[];
  };
}
export interface LibraryBook {
  book: Book;
}
interface StoreState {
  books: LibraryBook[];
  readingList: LibraryBook[];
  setBooks: (books: LibraryBook[]) => void;
  addToReadingList: (b: LibraryBook) => void;
  removeFromReadingList: (isbn: string) => void;
  isInReadingList: (isbn: string) => boolean;
}
const READING_KEY = "readingList_v1";

export const useLibraryStore = create<StoreState>((set, get) => ({
  books: [],
  readingList: JSON.parse(localStorage.getItem(READING_KEY) || "[]"),
  setBooks: (books) => set({ books }),
  addToReadingList: (b) => {
    const exists = get().readingList.find((x) => x.book.ISBN === b.book.ISBN);
    if (exists) return;
    const updated = [...get().readingList, b];
    localStorage.setItem(READING_KEY, JSON.stringify(updated));
    set({ readingList: updated });
  },
  removeFromReadingList: (isbn) => {
    const updated = get().readingList.filter((x) => x.book.ISBN !== isbn);
    localStorage.setItem(READING_KEY, JSON.stringify(updated));
    set({ readingList: updated });
  },
  isInReadingList: (isbn) => get().readingList.some((x) => x.book.ISBN === isbn),
}));

// Sincronizar entre pestañas: escucha cambios en localStorage
window.addEventListener("storage", (ev) => {
  if (ev.key === "readingList_v1") {
    try {
      const newList = JSON.parse(ev.newValue || "[]");
      useLibraryStore.setState({ readingList: newList });
    } catch (err) {
      console.error("Error parsing readingList from storage event", err);
    }
  }
});