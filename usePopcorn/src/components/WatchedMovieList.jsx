import Movie from "./Movie";

const WatchedMovieList = ({ watched }) => {
  return (
    <ul className='list'>
      {watched.map((movie, index) => (
        <Movie movie={movie} key={index} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
