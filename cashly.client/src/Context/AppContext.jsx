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

    const handleLogin = async (username, password) => {
        const data = await login(username, password);
        setUser(data);
        setIsAuthenticated(true);
    };

    const handleRegister = async (username, password) => {
        const data = await register(username, password);
        setUser(data);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        logout();
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AppContext.Provider value={{ user, isAuthenticated, handleLogin, handleRegister, handleLogout }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;