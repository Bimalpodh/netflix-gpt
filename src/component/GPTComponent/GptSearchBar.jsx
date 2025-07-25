import React, { useRef } from 'react'
import lang from '../../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import geminiModel from "../../utils/openAi/"
import { API_OPTION } from '../../utils/constant'
import { addGeminiMoviesResults } from '../../reduxStore/gptSlice'



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
    <div className='pt-[15%] md:pt-[12%] flex justify-center'>
   <form
  onSubmit={(e) => e.preventDefault()}
  className="w-full md:w-2/3 lg:w-1/2 bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 items-center"
>
  <input
    ref={searchText}
    type="text"
    className="w-full flex-1 px-4 py-3 rounded-md border border-gray-300 text-amber-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
    placeholder={lang[langKey]?.gptSearchPlaceHolder}
  />
  <button
    onClick={handleGptSearchClick}
    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-200 w-full md:w-auto"
  >
    {lang[langKey]?.search}
  </button>
</form>

  </div>
  
  )
}

export default GptSearchBar;
