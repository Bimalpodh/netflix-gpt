import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl font-bold text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll  ">
        <div className="flex space-x-4 ">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p className="bg-white p-4 -m-4">No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
