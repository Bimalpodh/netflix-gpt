/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";




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
