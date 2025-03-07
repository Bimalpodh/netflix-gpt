import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constant";

const Login = () => {
const [isSignInForm,setIsSignInForm]=useState(true)

  const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
  }


  // ====================
  return (
    <div>
      <Header />
      <div className="  absolute">
        <img className=" " src={BG_URL} alt="bg-img"  />
      </div>
      <div className=" ">
        <form className=" absolute bg-black opacity-80 w-3/12 border my-36 mx-auto right-0 left-0 text-white p-12">
          <h1 className="font-bold py-4  text-3xl"> {isSignInForm?"Sign In":"Sign Up" } </h1>
          {!isSignInForm && 
            <input type="text" placeholder="Enter Name" className=" bg-gray-700 p-4 my-4 w-full rounded-sm " />
          }
          <input type="email" placeholder="Email address" className=" bg-gray-700 p-4 my-4 w-full rounded-sm " />

          <input type="password" placeholder="password" className=" bg-gray-700 p-4 my-4 w-full rounded-sm"  />

          <button className=" cursor-pointer w-full p-4 my-6 bg-red-600 rounded-lg">{isSignInForm?"Sign In":"Sign Up" }</button>


          <p className="py-4 cursor-pointer "onClick={toggleSignInForm} >{isSignInForm?"New to Netflix ? Sign Up Now.": "Already Resisterd?Sign In now  "}  </p>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
