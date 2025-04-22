import React from "react";

const Homepage = ({onGetStartedClick}) => {
  return (
    <div className=" mt-74
    box-border
    md:mt-60 inset-0 flex items-center justify-center ">

          <div className="w-full fixed text-white text-center rounded-lg">
            <h1 className=" md:text-5xl text-3xl font-bold m-4">
              Unlimited movies, TV shows, and more
            </h1>
            <h4 className="m-4">Start at ₹149. Cancel anytime.</h4>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="flex  flex-col 
            md:flex-row
            justify-center items-center gap-2 mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-56 p-4 h-14 rounded-sm border border-red-500"
              />

              <button onClick={onGetStartedClick} className=" md:w-40 w-40 bg-red-700 h-14 rounded-sm font-bold text-lg cursor-pointer hover:bg-red-800 transition">
                Get Started ﹥
              </button>
            </div>
          </div>
        </div>
  );
};

export default Homepage;
