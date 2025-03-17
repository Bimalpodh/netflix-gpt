/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constant";
import { USER_AVATAR } from "../utils/constant";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../reduxStore/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch(); 

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    //sign in sign up logic
    if (!isSignInForm) {
      // sign up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up (when user succesfully sign up )
          const user = userCredential.user;

          // Updating a user Profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser(
                      {
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL
                      }
                    ));
              navigate("/browse"); // -----------
              

              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message)
              // ...
            });
          // console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse"); // -----------
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  const handleSignInClick = () => {
    setShowLoginForm(true);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className=" w-screen min-h-screen ">
      {/* Header */}

      <Header
        onSignInClick={handleSignInClick}
        showSignInButton={!showLoginForm}
      />

      <div className="relative w-full min-h-screen ">
        {/* Background Image */}

        <img
          className=" top-0 left-0 w-full min-h-screen object-cover fixed"
          src={BG_URL}
          alt="bg-img"
        />
        <div className="absolute top-0 left-0 w-full min-h-full bg-black opacity-50"></div>
      </div>

      {showLoginForm ? (
        <div className=" absolute mt-10 inset-0 flex justify-center items-center px-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black opacity-80 max-w-md w-full border text-white p-8 rounded-lg"
          >
            <h1 className="font-bold text-3xl text-center mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Enter Name"
                className="bg-gray-700 p-4 my-2 w-full rounded-sm"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email address"
              className="bg-gray-700  p-4 my-2 w-full rounded-sm"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="bg-gray-700
               p-4 my-2 w-full rounded-sm"
            />
            <p className="text-red-500 text-lg font-bold py-3">
              {errorMessage}
            </p>
            <button
              className="cursor-pointer w-full p-4 my-4 bg-red-600 rounded-lg transition-all duration-200 ease-in-out hover:bg-red-700 hover:scale-105 active:bg-red-800 active:scale-95 hover:font-bold"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>


            <p
              className="text-center cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix ? Sign Up Now."
                : "Already Registered? Sign In now"}
            </p>
            {/* Additional Options */}
          <div className="flex justify-between items-center text-sm text-gray-400 mt-3">
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="accent-red-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">Need help?</a>
          </div>

          {/* Sign-Up & Terms */}
          <div className="mt-6 text-gray-400 text-sm">
            
            <p className="mt-3 text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
              <a href="#" className="text-blue-500 hover:underline">Learn more</a>.
            </p>
          </div>
          </form>
          
        </div>
      ) : (
        <Homepage />
      )}
    </div>
  );
};

export default Login;
