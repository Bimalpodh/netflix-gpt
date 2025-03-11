import React from "react";

const Header = ({ onSignInClick ,showSignInButton }) => {
  // console.log(showSignInButton);
  // console.log(onSignInClick);
  

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-opacity-50 bg-gradient-to-b from-black z-10">
      {/* Logo */}
      <img
        className="w-36"
        src="src\assets\netflix-gpt.svg"
        alt="logo"
      />

      {/* Sign-in Button */}
      {!showSignInButton || (
        <div>
          <button
            className="text-white cursor-pointer font-bold w-20 rounded bg-red-500 h-10"
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
