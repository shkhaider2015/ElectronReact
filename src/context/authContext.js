import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase'
import { SpinnerLoading } from "../components/loading/loadingSpinner";

// const currentUser = auth.currentUser

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {



    const [user, loading, error] = useAuthState(auth);

    console.log("Auth : ", auth)
    console.log("AuthContext : ", AuthContext)

    if (loading) {
        return (
            <>
                <div style={{ width : '100%', height : '100%', display: 'grid', placeItems: 'center' }} > <SpinnerLoading /> </div>
            </>
        )
    }

    if (error) {
        return <>
            <div style={{ width : '100%', height : '100%', display: 'grid', placeItems: 'center' }} > <span> {error} </span> </div>
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