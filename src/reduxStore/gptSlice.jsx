import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
  name:"gpt",
  initialState:{
    showGptSearch:false,
    geminiMovies:null,
    movieNames:null,
    movieResults:null

  },
  reducers:{
    toggleGptSearchView:(state,action)=>{
      state.showGptSearch=!state.showGptSearch;
    },
    addGeminiMoviesResults:(state,action)=>{
      const {movieNames,movieResults}=action.payload;
      state.movieNames=movieNames;
      state.movieResults=movieResults;
    }
  },
});

export const{ toggleGptSearchView,addGeminiMoviesResults}=gptSlice.actions;

export default gptSlice.reducer;