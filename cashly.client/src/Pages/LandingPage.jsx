import React, { useState, useRef } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Grid,
    Card,
    CardContent,
    Stack,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const nav = useNavigate();

    const featuresRef = useRef(null);  // Reference to the features section

    const [loginOpen, setLoginOpen] = useState(false);

    const [joinOpen, setJoinOpen] = useState(false);

    const handleScrollToFeatures = () => {
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    //login modal dialog
    const handleLoginOpen = () => {
        setLoginOpen(true);
    };

    const handleLoginClose = () => {
        setLoginOpen(false);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        //logic here

        handleLoginClose();
        //nav("/dashboard");
    }

    //sign up modal dialog
    const handleJoinOpen = () => {
        setJoinOpen(true);
    }

    const handleJoinClose = () => {
        setJoinOpen(false);
    }

    const handleJoinSubmit = (e) => {
        e.preventDefault();
        //more logic

        handleJoinClose();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" color="secondary" elevation={0} sx={{ mt: 2, py: 1, borderBottom: '2px solid #f4f6f7', }}>
                <Toolbar>
                    <Typography variant="h3" sx={{
                        flexGrow: 1,
                        fontFamily: 'Dancing Script',
                        fontWeight: "400",
                    }}>
                        Cashly
                    </Typography>
                    <Button variant="outlined" color="primary" sx={{ fontWeight: "600", ml: 4 }} onClick={handleScrollToFeatures}>
                        Features
                    </Button>
                    <Button variant="contained"
                        color="primary"
                        sx={{ fontWeight: "600", mr: 3, ml: 3 }}
                        onClick={handleLoginOpen }
                        >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md"
                sx={{
                    textAlign: 'center'
                    , mt: 15,
                    animation: 'slideIn 1s ease-out',
                    '@keyframes slideIn': {
                        '0%': { transform: 'translateY(20px)', opacity: 0 },
                        '100%': { transform: 'translateY(0)', opacity: 1 },
                    }
                }}
            >
                <Typography variant="h1" gutterBottom sx={{ letterSpacing: '0.10em' }}>
                    Welcome to Cashly!
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: '400', lineHeight: 1.6 }}>
                    Track your expenses with ease and stay on top of your finances.
                    <br />
                    Manage your budget effortlessly, gain full control over your spending habits.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleJoinOpen}
                    sx={{
                        mt: 4,
                        px: 4,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                    }}
                >
                    Get Started
                </Button>
                {/* Features Section */}
                <Container ref={featuresRef} maxWidth="md" sx={{ fontWeight: '400', lineHeight: 1.6, mt: 13, mb: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', letterSpacing: '0.10em', mb: 5 }} >
                        Features
                    </Typography>
                    <Stack spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: '100%', textAlign: 'center' }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Easy Expense Tracking
                                    </Typography>
                                    <Typography variant="body2">
                                        Quickly add and categorize expenses, making it simple to keep track of your spending.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: '100%', textAlign: 'center' }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Budget Management
                                    </Typography>
                                    <Typography variant="body2">
                                        Set and manage your budgets, ensuring you never overspend and stay on top of your finances.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: '100%', textAlign: 'center' }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Detailed Reports
                                    </Typography>
                                    <Typography variant="body2">
                                        Generate insightful reports that help you analyze your spending patterns and make informed decisions.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Stack>
                </Container>
            </Container>
            {/* Footer Section */}
            <Box sx={{ backgroundColor: '#f7fcfc', py: 4, mt: 'auto' }}>
                <Container maxWidth="md">
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                        <Typography variant="body2">
                            Cashly helps you manage your finances effortlessly. Stay on top of your expenses and achieve your financial goals.
                        </Typography>
                    </Grid>
                    <br/>
                    <Typography variant="body2" align="center">
                        &copy; {new Date().getFullYear()} Cashly. All rights reserved.
                    </Typography>
                </Container>
            </Box>
            {/* Login modal*/}
            <Dialog open={loginOpen} onClose={handleLoginClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 2 }}>
                        <TextField
                            margin="dense"
                            name="username"
                            label="Username"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            required
                        />
                        <DialogActions>
                            <Button onClick={handleLoginClose} color="primary">
                                Cancel
                            </Button>
                            <Button variant="contained" type="submit" color="primary">
                                Login
                            </Button>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>

            {/* Join modal*/}
            <Dialog open={joinOpen} onClose={handleJoinClose}>
                <DialogTitle>Join</DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={handleJoinClose} sx={{ mt: 2 }}>
                        <TextField
                            margin="dense"
                            name="username"
                            label="Username"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            required
                        />
                        <DialogActions>
                            <Button onClick={handleJoinClose} color="primary">
                                Cancel
                            </Button>
                            <Button variant="contained" type="submit" color="primary">
                                Sign Up
                            </Button>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default LandingPage;
