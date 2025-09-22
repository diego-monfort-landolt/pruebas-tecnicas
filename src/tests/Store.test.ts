import { describe, it, expect, beforeEach } from "vitest";
import { useLibraryStore } from "../store/useLibraryStore";
import type { LibraryBook } from "../store/useLibraryStore";

const sampleBook: LibraryBook = {
  book: {
    title: "Testbuch",
    pages: 100,
    genre: "Test",
    cover: "test.jpg",
    synopsis: "Lorem",
    year: 2020,
    ISBN: "123",
    author: { name: "Autor", otherBooks: [] },
  },
};

describe("useLibraryStore", () => {
  beforeEach(() => {
    useLibraryStore.setState({ books: [], readingList: [] });
    localStorage.clear();
  });

  it("fügt ein Buch hinzu", () => {
    useLibraryStore.getState().addToReadingList(sampleBook);
    const list = useLibraryStore.getState().readingList;
    expect(list).toHaveLength(1);
    expect(list[0].book.ISBN).toBe("123");
  });

  it("entfernt ein Buch", () => {
    useLibraryStore.getState().addToReadingList(sampleBook);
    useLibraryStore.getState().removeFromReadingList("123");
    const list = useLibraryStore.getState().readingList;
    expect(list).toHaveLength(0);
  });

  it("prüft ob ein Buch in der Leseliste ist", () => {
    useLibraryStore.getState().addToReadingList(sampleBook);
    const inList = useLibraryStore.getState().isInReadingList("123");
    expect(inList).toBe(true);
  });
});
