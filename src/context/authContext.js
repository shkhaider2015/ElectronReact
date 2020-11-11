import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../config/firebase'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, loading, error] = useAuthState(firebase.auth());

    if (loading) {
        return (
            <>
                Loading ....
            </>
        )
    }

    if (error) {
        return <>
            Error ...
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