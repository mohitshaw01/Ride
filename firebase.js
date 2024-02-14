import {initializeApp} from 'firebase/app';
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhqOJ45iNcIqSUpxzY--LQxAuh2FarWrI",
  authDomain: "ride-share-d0008.firebaseapp.com",
  projectId: "ride-share-d0008",
  storageBucket: "ride-share-d0008.appspot.com",
  messagingSenderId: "552994410900",
  appId: "1:552994410900:web:8acf4d95308a51893fbf81"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth};

//
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDhqOJ45iNcIqSUpxzY--LQxAuh2FarWrI",
//   authDomain: "ride-share-d0008.firebaseapp.com",
//   projectId: "ride-share-d0008",
//   storageBucket: "ride-share-d0008.appspot.com",
//   messagingSenderId: "552994410900",
//   appId: "1:552994410900:web:8acf4d95308a51893fbf81"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();
// const auth = getAuth();

// export {app, provider, auth};