import axios from 'axios';

const API_URL = "https://localhost:7205/api/Auth";

//user register
export const register = async () => {
    const reponse = await axios.post(`${API_URL}/register`, { username, password });
    return response.data;
}

// user login
export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};


//user logout 
export const logout = () => {
    localStorage.removeItem('user');
};