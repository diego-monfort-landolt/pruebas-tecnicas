// src/tests/ReadingList.test.tsx
import { render, screen } from "@testing-library/react";
import { useLibraryStore, type LibraryBook } from "../store/useLibraryStore";
import ReadingList from "../components/ReadingList";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';

const sampleBook: LibraryBook = {
  book: {
    title: "Buch X",
    pages: 111,
    genre: "Fantasía",
    cover: "cover.jpg",
    synopsis: "abc",
    year: 2000,
    ISBN: "111",
    author: { name: "AutorX", otherBooks: [] },
  },
};

describe("ReadingList component", () => {
  it("zeigt Hinweis wenn leer", () => {
    useLibraryStore.setState({ readingList: [] });
    render(<ReadingList />);
    expect(screen.getByText(/Sin libros en la lista/i)).toBeInTheDocument();
  });

  it("zeigt ein hinzugefügtes Buch", () => {
    useLibraryStore.setState({ readingList: [sampleBook] });
    render(<ReadingList />);
    expect(screen.getByText("Buch X")).toBeInTheDocument();
    expect(screen.getByText(/AutorX/i)).toBeInTheDocument();
  });
});
