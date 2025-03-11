import React from "react";

const Homepage = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center min-h-screen">
          <div className="w-[750px] text-white text-center p-6 rounded-lg">
            <h1 className="text-5xl font-bold m-4">
              Unlimited movies, TV shows, and more
            </h1>
            <h4 className="m-4">Start at ₹149. Cancel anytime.</h4>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="flex justify-center items-center gap-2 mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-56 p-4 h-14 rounded-sm border border-red-500"
              />

              <button className="w-40 bg-red-700 h-14 rounded-sm font-bold text-lg cursor-pointer hover:bg-red-800 transition">
                Get Started ﹥
              </button>
            </div>
          </div>
        </div>
  );
};

export default Homepage;
