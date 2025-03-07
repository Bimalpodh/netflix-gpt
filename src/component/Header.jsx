import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-opacity-50 z-10">
      {/* Logo */}
      <img
        className="w-36"
        src="./src/assets/Netflix-Logo.wine.svg"
        alt="logo"
      />

      {/* Sign-in Button */}
      <div>

        <button className="text-white font-bold w-20 rounded bg-red-500 h-10">
          Sign in
        </button>

      </div>
    </div>
  );
};

export default Header;
