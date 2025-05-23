/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackGround from "./VideoBackGround"


const MainContainer = () => {
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies)

  if(!movies)return;
  // this is also known as early return
  const mainMovie=movies[3];
  const {original_title,overview,id}=mainMovie;
  

  return (
    <div className="mt-[30%] md:mt-0 ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id}/>
      
    </div>
  )
}

export default MainContainer