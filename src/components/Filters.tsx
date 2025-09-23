import React from "react";

const Filters: React.FC<{
  genre: string;
  setGenre: (g: string) => void;
  genres: string[];
  minPages: number;
  setMinPages: (n: number) => void;
}> = ({ genre, setGenre, genres, minPages, setMinPages }) => {
  return (
    <div className="filters" role="region" aria-label="Filtros">
      <div className="filter-control">
        <label style={{ color: "var(--muted)" }}>Filtrar por género</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{ padding: "6px", borderRadius: 6, background: "gray", color: "#fff", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-control">
        <label style={{ color: "var(--muted)" }}>Páginas mínimas</label>
        <input
          type="number"
          min={0}
          value={minPages}
          onChange={(e) => setMinPages(Number(e.target.value || 0))}
          className="range"
          style={{
            padding: "6px",
            borderRadius: 6,
            background: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.06)",
            width: 120,
          }}
        />
      </div>
    </div>
  );
};
export default Filters;