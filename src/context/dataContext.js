import React from 'react'

export const UserListContext = React.createContext()
export const ClientsListContext = React.createContext()

export const UserProvioder = ({ children }) =>
{
    const users = React.useState([])

    return(
        <UserListContext.Provider value={users} >
            { children }
        </UserListContext.Provider>
    )
}

export const ClientProvioder = ({ children }) =>
{
    const clients = React.useState([])

    return(
        <ClientsListContext.Provider value={clients} >
            { children }
        </ClientsListContext.Provider>
    )
}