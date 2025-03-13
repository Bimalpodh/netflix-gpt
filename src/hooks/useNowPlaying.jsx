import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../reduxStore/moviesSlice";
import { API_OPTION } from "../utils/constant";


const useNowPlaying=()=>{

  //here dispatch moviesslice action to get movies
  const dispatch =useDispatch(); 
  const getNowPlayingMovies= async ()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTION);
    const json=await data.json();
    console.log((json.results));
    dispatch(addNowPlayingMovies(json.results));
    
  };
  useEffect(()=>{
    getNowPlayingMovies();
  },[])

}

export default useNowPlaying;