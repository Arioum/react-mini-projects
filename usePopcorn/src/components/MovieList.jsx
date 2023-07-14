import Movie from "./Movie"

const MovieList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  )
}

export default MovieList