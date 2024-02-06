// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBM9VXVnVOJ4c6IQwaT8t2rJDtSYB41xs",
  authDomain: "openinapp-gauth.firebaseapp.com",
  projectId: "openinapp-gauth",
  storageBucket: "openinapp-gauth.appspot.com",
  messagingSenderId: "431887612620",
  appId: "1:431887612620:web:5e447026babe1a2ec3e069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };