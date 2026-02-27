import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

import React from 'react';
import { auth } from "../firebase/auth";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }
    const authData = {
      user,
      setUser,
      createUser,
    };
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
