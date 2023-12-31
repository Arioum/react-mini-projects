import { useState } from "react";
import { tempMovieData } from "./tempData";
import { tempWatchedData } from "./tempData";
import Navbar from "./layout/Navbar";
import NumResults from "./components/NumResults";
import Main from "./layout/Main";
import Search from "./components/Search";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import StarRating from "./components/StarRating";
import RatingBox from "./components/RatingBox";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Search query={query} onSetQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <StarRating
            size={24}
            messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
            defaultRating={3}
          />
          <RatingBox />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
