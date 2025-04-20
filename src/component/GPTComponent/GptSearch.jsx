import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BG_URL } from '../../utils/constant'
const GptSearch = () => {
  return (
    <div >
         <div className=" fixed -z-10 ">
              {/* Background Image */}
      
              <img
                className=" top-0 left-0 w-full min-h-screen object-cover fixed"
                src={BG_URL}
                alt="bg-img"
              />
             
            </div>
     <GptSearchBar/>
     <GptMoviesSuggestion/>
      
    </div>
  )
}

export default GptSearch