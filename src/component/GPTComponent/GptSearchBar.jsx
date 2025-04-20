import React, { useRef } from 'react'
import lang from '../../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import geminiModel from "../../utils/openAi/"
import { API_OPTION } from '../../utils/constant'
import { addGeminiMoviesResults } from '../../reduxStore/gptslice'

const GptSearchBar = () => {
  const langKey=useSelector((store)=>store?.config?.lang);
  const searchText=useRef(null);
  const dispatch=useDispatch();


    // Search Movie in TMDB DAtabase
    const SearchMovieTMDB= async (movie)=>{
      const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTION);
      const json=await data.json();
      console.log("this is json",json);
      
  
      return json.results;
    };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery="Act as a movie Recommendation system and suggest some movies for the query"+searchText.current.value+". only give me top 5 movies name with comma seperated like the example result given ahead. Example Koi mil gaya,sholay,Don,Bhagam Bhag, Golmal"

    // make an api call  to gpt api and get movie result

    const results=await geminiModel.generateContent(gptQuery);
    const geminiResult= await results.response;
    const movieList=geminiResult.text();
   
    if(!movieList){
      console.log(" Search Movie is not available ");
      
    }
    const gmiMovies=movieList.split(",")  //it create a array of movieList
    // for each movie I willl search TMDB API

    const data= gmiMovies.map((movie)=>SearchMovieTMDB(movie))
    // [promise, promise,promise,promise,promise]

    const tmdbResults= await  Promise.all(data);
    dispatch(addGeminiMoviesResults({movieNames:gmiMovies,movieResults:tmdbResults}));

  };

  return (
    <div className='pt-[12%] flex justify-center'>
    <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 bg-black/70 grid grid-cols-12 '>
      <input
      ref={searchText}
        type="text"
        className='p-4 m-4 border bg-white col-span-9'
        placeholder={lang[langKey]?.gptSearchPlaceHolder}
      />
      <button onClick={handleGptSearchClick} className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 w-auto '>
        {lang[langKey]?.search}
      </button>
    </form>
  </div>
  
  )
}

export default GptSearchBar;