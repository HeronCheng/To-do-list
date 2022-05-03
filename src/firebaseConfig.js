import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator,addDoc, doc, getDocs,getDoc,updateDoc,collection,deleteDoc,query, where,setDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { getAuth } from "firebase/auth";
import React, {useEffect, useState, forwardRef, useImperativeHandle} from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyDLqUW3lVtYj2ZcIUdLZpbNnYg5v0inetg",
  authDomain: "to-do-list-b9996.firebaseapp.com",
  databaseURL: "https://to-do-list-b9996-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "to-do-list-b9996",
  storageBucket: "to-do-list-b9996.appspot.com",
  messagingSenderId: "183227798243",
  appId: "1:183227798243:web:73f72b5c708c14cd702bd6",
  measurementId: "G-SE03YSQN89"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getFirestore(app);
// connectFirestoreEmulator(db, 'localhost', 8080);



const auth = getAuth(app);

// Initialize the FirebaseUI Widget using Firebase.

const uiConfig = {
  callbacks: {
  signInSuccessWithAuthResult(authResult, redirectUrl) {
      return true
  },
  uiShown() {
      document.getElementById("loader").style.display = "none"
  },
  },
  signInFlow: "popup",
  signInSuccessUrl: "/listpage",
  signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}



const Signinup=()=>{
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver =auth.onAuthStateChanged(user => {
      localStorage.setItem("userStatus", user.accessToken)
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  console.log(isSignedIn)
  if (!isSignedIn) {
      return (
        <div>
          <h1 className="text-center">Welcome to start Organize Yourself!</h1>
          <p className="text-center">Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          <div id="loader" className="text-center">Loading...</div>
        </div>
      );
    }
}



const SignOut=React.forwardRef((props, ref)=>{
  const user = auth.currentUser;
  
  let userName;
  const [userData, setUserData] = useState ("");

  
  useEffect(()=>{
    if (user !== null) {
      setUserData(user.uid)
    }
  },[user])

  if (user !== null) {
    user.providerData.forEach((profile) => {
      userName=profile.displayName;
    });
  }

  useImperativeHandle(ref, ()=>({
    getFromData: ()=> {
        return userData;
    }
  }))

  function exit(){
    auth.signOut();
    localStorage.removeItem("userStatus");
  }
  return(
    <>
      <p className="text-right mb-2">Welcome {userName}! You are now signed-in!</p>
      <div className="text-right mb-3"><Link to="/"><span className="text-right cursor-pointer border-solid rounded-3xl border w-24 mx-auto my-7 p-1.5 bg-slate-300 font-semibold text-gray-800" onClick={exit} >Sign-out</span></Link></div>
    </>
  )
})



export default Signinup;

export {
    db,
    addDoc,
    doc,
    getDocs,
    getDoc,
    updateDoc,
    collection,
    deleteDoc,
    query, 
    where,
    setDoc,
    SignOut,
    auth
}