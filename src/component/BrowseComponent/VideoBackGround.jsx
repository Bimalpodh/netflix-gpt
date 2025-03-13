import useMoviesTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackGround = ({ movieId }) => {
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);
  useMoviesTrailer(movieId);


  return (
    <div>
      <iframe className=" w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
