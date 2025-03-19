import Header2 from "./Header2";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./BrowseComponent/MainContainer";
import SecondaryContainer from "./BrowseComponent/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GPTComponent/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header2 />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
        - Main Section
            - video Background
            - video title

        - secondary Conatiner
            - nmoviesLis * n (rows)
            - cards * n
      
      */}
    </div>
  );
};

export default Browse;
