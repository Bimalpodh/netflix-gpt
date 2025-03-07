import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

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

const Body = () => {
  return (
    <RouterProvider router={appRouter} />
  );
};

export default Body;
