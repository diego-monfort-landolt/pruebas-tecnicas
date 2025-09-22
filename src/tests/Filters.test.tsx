// src/tests/Filters.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../components/Filters";

describe("Filters component", () => {
  it("ändert das Genre", () => {
    let genre = "Todas";
    const setGenre = (g: string) => (genre = g);

    render(
      <Filters
        genre={genre}
        setGenre={setGenre}
        genres={["Todas", "Fantasía", "Romance"]}
        minPages={0}
        setMinPages={() => {}}
      />
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Romance" } });
    expect(genre).toBe("Romance");
  });

  it("ändert die Seitenanzahl", () => {
    let pages = 0;
    const setPages = (n: number) => (pages = n);

    render(
      <Filters
        genre="Todas"
        setGenre={() => {}}
        genres={["Todas"]}
        minPages={pages}
        setMinPages={setPages}
      />
    );

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "300" } });
    expect(pages).toBe(300);
  });
});
