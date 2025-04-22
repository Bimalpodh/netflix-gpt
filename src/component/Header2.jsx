import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../reduxStore/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { toggleGptSearchView } from "../reduxStore/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constant";
import { changeLanguage } from "../reduxStore/configSlice";

const Header2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
    <div className="absolute top-0 left-0 w-full px-4 md:px-12 flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-black via-black/70 to-transparent z-10 ">
      {/* Logo */}
      <img
        className="w-24 md:w-36 "
        src="src\assets\netflix-gpt.svg"
        alt="logo"
      />

      {/* Sign-in Button */}

      {user && (
        <div className="flex  md:p-2">
          {showGptSearch && (
            <select
              className="bg-amber-50 w-20 rounded-sm md:p-2 h-8  text-[17px] md:h-10 mr-2  md:m-2"
              name="lang"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE?.map((lang) => (
                <option key={lang?.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-gray-300 h-7  px-3 md:px-4 md:py-2 md:h-10 md:m-2 rounded-lg hover:font-bold"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ? "GPT-search" : "Homepage"}
          </button>
          <img
            className=" md:h-14 h-7 px-2 md:py-2 "
            src={user.photoURL}
            alt="user"
          />

          <div className="p-0 mb-0">
            <button
              className="  text-red-700 font-bold text-[11px] md:text-sm md:font-bold md:mx-2"
              onClick={handleSignOut}
            >
              (Sign Out)
              
              <p className="mr-2 md:mx-2  md:text-xl font-bold text-sky-700">
                {user?.displayName}
              </p>
           
            </button>
           
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Header2;
