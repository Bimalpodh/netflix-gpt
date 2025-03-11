/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZdHF3c-9f528vwvTG6THFNusnAiNrSt8",
  authDomain: "netflix-gpt-e6cb6.firebaseapp.com",
  projectId: "netflix-gpt-e6cb6",
  storageBucket: "netflix-gpt-e6cb6.firebasestorage.app",
  messagingSenderId: "302578550437",
  appId: "1:302578550437:web:60b82a5ec61057015e6f4c",
  measurementId: "G-KBJ8V7L121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();