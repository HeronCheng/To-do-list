import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLqUW3lVtYj2ZcIUdLZpbNnYg5v0inetg",
  authDomain: "to-do-list-b9996.firebaseapp.com",
  projectId: "to-do-list-b9996",
  storageBucket: "to-do-list-b9996.appspot.com",
  messagingSenderId: "183227798243",
  appId: "1:183227798243:web:73f72b5c708c14cd702bd6",
  measurementId: "G-SE03YSQN89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById( "root" );
const root = ReactDOM.createRoot( container );
root.render( <App/> );