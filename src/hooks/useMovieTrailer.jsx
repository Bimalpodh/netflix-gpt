import { useDispatch, useSelector} from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../reduxStore/moviesSlice";
import { useEffect } from "react";

const useMoviesTrailer=(movieId)=>{
  const dispatch=useDispatch();
  const trailerVideo=useSelector((store)=>store.trailerVideo)
  // console.log("this is",movieId);
  

  
    // fetch Trailer  video $$ updating the store with trailere video data
    const getMoviesVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTION
      );
      const json = await data.json();
    

  
      const FiltertrailerData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = FiltertrailerData.length
        ? FiltertrailerData[0]
        : json.results[0];
  
      dispatch(addTrailerVideo(trailer))
  
    };
  
    useEffect(() => {
      !trailerVideo && getMoviesVideo();
    }, []);



}

export default useMoviesTrailer;