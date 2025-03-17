import { useDispatch } from "react-redux"
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../reduxStore/moviesSlice";



const useTopRatedMovies = () => {

 //here dispatch moviesslice action to get movies
const dispatch=useDispatch();

const getTopRatedMovies=async ()=>{

  const data= await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTION);
  const json=await data.json();
  dispatch(addTopRatedMovies(json?.results))
};

useEffect(()=>{
  getTopRatedMovies()
},[])

}


export default useTopRatedMovies