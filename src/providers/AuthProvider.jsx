/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user);

    // signup with email & password
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update profile(add username, photo)
    const profileUpdate = (userInfo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    // login with email & password
    const loginWithEmailPassword = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



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
        createUser,
        profileUpdate,
        loginWithEmailPassword,
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