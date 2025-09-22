import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";
import { describe, it, expect } from "vitest";

describe("App Integration", () => {
  it("fügt ein Buch zur Leseliste hinzu und entfernt es wieder", async () => {
    render(<App />);

    // "Add" Buttons suchen
    const addButtons = await screen.findAllByRole("button", { name: /Añadir/i });
    expect(addButtons.length).toBeGreaterThan(0);

    // erstes Buch hinzufügen
    act(() => {
      fireEvent.click(addButtons[0]);
    });

    // Button "Quitar" sollte erscheinen
    const removeButtons = await screen.findAllByRole("button", { name: /Quitar/i });
    expect(removeButtons.length).toBeGreaterThan(0);

    // wieder entfernen
    act(() => {
      fireEvent.click(removeButtons[0]);
    });

    // wieder "Añadir" sichtbar
    const addButtonsAgain = await screen.findAllByRole("button", { name: /Añadir/i });
    expect(addButtonsAgain.length).toBeGreaterThan(0);
  });
});
