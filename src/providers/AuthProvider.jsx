/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user);

    // Google login
    const provider = new GoogleAuthProvider();
    const loginWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Signout
    const Logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }

    }, [])

    const authIfo = {
        user,
        setUser,
        loading,
        setLoading,
        loginWithGoogle,
        Logout,

    }
    return (
        <AuthContext.Provider value={authIfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;