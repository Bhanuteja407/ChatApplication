// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_5J1fSikRB3qWDRYQWnzHjvaiLpmjSqw",
  authDomain: "chatapp-895af.firebaseapp.com",
  projectId: "chatapp-895af",
  storageBucket: "chatapp-895af.appspot.com",
  messagingSenderId: "140417014519",
  appId: "1:140417014519:web:0829e101e2160bb7a9d1f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();