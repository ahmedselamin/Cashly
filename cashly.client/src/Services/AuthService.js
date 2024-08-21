import axios from 'axios';

const API_URL = "https://localhost:7205/api/Auth";

//user register
export const register = async (username, password) => {
    const reponse = await axios.post(`${API_URL}/register`, { username, password });

    if (response.data.Success) {
        return response.data.Data
    } else {
        throw new Error(response.data.Message);
    }
}

// user login
export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.Success) {
        localStorage.setItem('user', JSON.stringify(response.data.Data));  // Store user data
    } else {
        throw new Error(response.data.Message);
    }
    return response.Data;
};


//user logout 
export const logout = () => {
    localStorage.removeItem('user');
};