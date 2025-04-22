import MovieCard from "./MovieCard";
import { useState } from "react";
import TrailerModal from "./TrailerModal";

const MovieList = ({ title, movies }) => {
  const [selectedMovie,setSelectedMovie]=useState(null)
  
  
  return (
    <div className="md:px-6 ">
      <h1 className="text-lg md:text-3xl font-bold text-white py-4">{title}</h1>
      <div className="flex   ">
        <div className="flex space-x-4 overflow-x-scroll ">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} onClick={()=>setSelectedMovie(movie.id)}  />
            ))
          ) : (
            <p className="bg-white text-red-950 p-4 -m-4">No movies available</p>
          )}
        </div>
      </div>

          {selectedMovie && (
            <TrailerModal movieId={selectedMovie} onClose={()=>setSelectedMovie(null)}/>
          )};
          
    </div>
  );
};

export default MovieList;
