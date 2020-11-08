import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../config/firebase'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(firebase.auth())

    if (loading) {
        <>
            Loading ....
        </>
    }

    if (error) {
        return <>
            {error}
        </>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser: user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}