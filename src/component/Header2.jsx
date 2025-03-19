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
    <div className="absolute px-10 top-0 left-0 w-full flex justify-between items-center  bg-opacity-50 bg-gradient-to-b from-black z-10">
      {/* Logo */}
      <img className="w-36" src="src\assets\netflix-gpt.svg" alt="logo" />

      {/* Sign-in Button */}

      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="bg-amber-50 p-2  h-10 m-2"
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
            className="bg-gray-300 px-4 py-2 m-2 rounded-lg hover:font-bold"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch?"GPT-search": "Homepage"}
          </button>
          <img className="h-14 px-2 py-2 " src={user.photoURL} alt="user" />

          <div>
            <p className="mx-2 text-xl text-green-500">{user?.displayName}</p>
            <button
              className="text-white text-sm font-bold mx-2"
              onClick={handleSignOut}
            >
              (Sign Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header2;
