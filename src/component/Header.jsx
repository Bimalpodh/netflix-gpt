import React from "react";

const Header = ({ onSignInClick ,showSignInButton }) => {

  
  return (
    <div className="fixed top-0 left-0 w-full px-4 md:px-12 flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-black via-black/70 to-transparent z-50">
    <img
      className="w-24 md:w-36"
      src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-512.png"
      alt="logo"
    />
      
      {/* Sign-in Button */}
      {!showSignInButton || (
        <div>
          <button
            className="text-white cursor-pointer font-bold w-20 rounded bg-red-500 md:hover:bg-red-700 h-10"
            onClick={onSignInClick}
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
