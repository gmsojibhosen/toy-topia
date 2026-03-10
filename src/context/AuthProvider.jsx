import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

import React from "react";
import { auth } from "../firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  } 
 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);

     if (currentUser) {
       console.log("User Logged In");
     } else {
       console.log("User Logged Out");
     }
   });

   return () => unsubscribe();
 }, []);

  const authData = {
    user,
    setUser,
    createUser,
    loginUser,
    logOut,
  };
  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
