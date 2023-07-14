import { useState } from "react";
import { tempMovieData } from "./tempData"
import Navbar from "./layout/Navbar";
import Main from "./layout/Main";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar movies={movies} query={query} onSetQuery={setQuery} />
      <Main movies={movies} />
    </>
  );
}
