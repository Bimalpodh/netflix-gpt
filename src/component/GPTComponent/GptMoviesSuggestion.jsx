import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../BrowseComponent/MovieList";

const GptMoviesSuggestion = () => {

  const gpt= useSelector((store)=>store.gpt);
  const {movieResults,movieNames}=gpt;

  if(!movieNames) return null;
  

  return (
    <div className="p-4 m-4 bg-black/80 text-red-100 ">

      <div>
        {movieNames.map((movieNames,index)=>
          <MovieList key={movieNames} 
          title={movieNames} 
          movies={movieResults[index]}/>
          )}
        
      </div>
      
    </div>
    );
};

export default GptMoviesSuggestion;
