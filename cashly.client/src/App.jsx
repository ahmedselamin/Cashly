import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import LandingPage from './pages/LandingPage';
import Dashboard from './Pages/Dashboard';
import AppProvider from './Context/AppContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Router>
            </AppProvider>
        </ThemeProvider>
    );
}

export default App;
