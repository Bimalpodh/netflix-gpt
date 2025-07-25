/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
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
const auth = getAuth(app);

// ✅ Safe function to get analytics if supported
const getAnalyticsInstance = async () => {
  const supported = await isSupported();
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("✅ Firebase Analytics initialized");
    return analytics;
  } else {
    console.warn("⚠️ Firebase Analytics not supported in this environment");
    return null;
  }
};

export { app, auth, getAnalyticsInstance };
