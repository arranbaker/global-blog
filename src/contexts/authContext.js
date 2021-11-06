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
    const [userId, setUserId] = useState('guest')

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
            if (user) {
                setActiveUser(user);
                setLoading(false)
                setUserId(user.uid)
            } else {
                setUserId('guest')
                setLoading(false)
            }
        })

        return unsubscribe

    }, [])

    const value = {
        activeUser,
        login,
        signup,
        resetPassword,
        logout,
        userId,
    }

    return (
        <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
    );
};