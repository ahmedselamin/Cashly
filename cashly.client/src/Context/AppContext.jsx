import React, { useState, useContext, createContext } from 'react';
import { register, login, logout } from '../Services/AuthService';

//context
const AppContext = createContext();

//custom hook
export const useAppContext = () => useContext(AppContext);

//provider component

const AppProvider = ({ children }) => {
    //state vars
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))||null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!user); //login state
    const [error, setError] = useState(null);   //store any error

    const handleLogin = async (username, password) => {
        try {
            const data = await login(username, password);
            setUser(data);
            setIsAuthenticated(true);
            setError(null);
        } catch (error) {
            console.log(error.message)
        }
    };

    const handleRegister = async (username, password) => {
        try {
            const data = await register(username, password);
            setUser(data);
            setIsAuthenticated(true);
            setError(null); 
        } catch (error) {
            console.log(error.message)
        }
    };

    const handleLogout = () => {
        logout();
        setUser(null);
        setIsAuthenticated(false);
        setError(null);
    };

    return (
        <AppContext.Provider value={{ user, isAuthenticated, handleLogin, handleRegister, handleLogout, error }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;