import useMoviesTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackGround = ({ movieId }) => {
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);
  useMoviesTrailer(movieId);


  return (
    <div className="w-full bg-black">
    <iframe
      className="w-full aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&mute=1"
      }
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
  
  );
};

export default VideoBackGround;
