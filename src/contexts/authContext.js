import React, { useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../config/FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "@firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {

    const [activeUser, setActiveUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logout = () => {
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setActiveUser(user);
            setLoading(false)
            console.log(user)
        })

        return unsubscribe

    }, [])



    const value = {
        activeUser,
        login,
        signup,
        resetPassword,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
    );
};