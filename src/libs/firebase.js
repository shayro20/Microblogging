// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// import {initializeApp} from "firebase/compac/app";
import {getAnalytics} from "firebase/analytics";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTCw4ogerB9yZBbg1cmJyAUgMljeg9bk8",
  authDomain: "micro-blogger-29276.firebaseapp.com",
  projectId: "micro-blogger-29276",
  storageBucket: "micro-blogger-29276.appspot.com",
  messagingSenderId: "226721720250",
  appId: "1:226721720250:web:67ea11eeeccc77cc2c1f83",
  measurementId: "G-DNG3S0VQ21",
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default db;
