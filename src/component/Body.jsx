/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../reduxStore/userSlice";



const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />, 
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  // ------------------------------

  



  return (
    <RouterProvider router={appRouter} />
  );
};

export default Body;
