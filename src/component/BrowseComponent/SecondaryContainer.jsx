import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-52 pl-6 md:pl-18 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />        
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
        </div>
        {/* 
     
     MovieList - Popular
        MovieCard * n
     MovieList - NowPlaying
     MovieList - Trending
     MovieList - Horror
    
    */}
      </div>
    )
  );
};

export default SecondaryContainer;
