import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDLqUW3lVtYj2ZcIUdLZpbNnYg5v0inetg",
  authDomain: "to-do-list-b9996.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/1/project/to-do-list-b9996/database/to-do-list-b9996-default-rtdb/data/~2F",
  projectId: "to-do-list-b9996",
  storageBucket: "to-do-list-b9996.appspot.com",
  messagingSenderId: "183227798243",
  appId: "1:183227798243:web:73f72b5c708c14cd702bd6",
  measurementId: "G-SE03YSQN89"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);



const container = document.getElementById( "root" );
const root = ReactDOM.createRoot( container );
root.render( <App/> );