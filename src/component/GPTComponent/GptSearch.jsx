import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { BG_URL } from "../../utils/constant";


const GptSearch = () => {
  return (
    <>
      <div className=" fixed -z-10 ">
        {/* Background Image */}

        <img
          className=" top-0 left-0 w-full  h-screen md:min-h-screen object-cover fixed"
          src={BG_URL}
          alt="bg-img"
        />
      </div>
      <div className="pt-[35%] md:p-0">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
