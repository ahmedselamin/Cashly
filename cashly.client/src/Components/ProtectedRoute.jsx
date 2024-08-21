import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAppContext();

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
