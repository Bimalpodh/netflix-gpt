import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addUpcomingMovies } from "../reduxStore/moviesSlice";
import { useEffect } from "react";


const useUpComingMovies = () => {

  const dispatch=useDispatch();
  const getUpcomingMovies=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTION);
    const json=await data.json();
    dispatch(addUpcomingMovies(json?.results));

  };

  useEffect(()=>{

    getUpcomingMovies();
  },[])
  
}

export default useUpComingMovies