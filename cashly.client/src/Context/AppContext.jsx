import React, { useState, useContext, createContext } from 'react';

//context
const AppContext = createContext();

//custom hook
export const useAppContext = () => useContext(AppContext);

//provider component

const AppProvider = ({ children }) => {
    //state vars
    const [user, setUser] = useState(null);

    const [isAuthenticated, setIsAuthenticated] = useState(false); //login state
        
    return (
        <AppContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }} >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;