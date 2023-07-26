import Movie from "./Movie"

const WatchedMovieList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  )
}

export default WatchedMovieList