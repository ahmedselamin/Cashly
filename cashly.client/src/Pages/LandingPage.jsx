import React, { useRef } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardContent, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LandingPage = () => {
    const featuresRef = useRef(null);  // Reference to the features section

    const handleScrollToFeatures = () => {
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    };

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
                    <Button color="primary" sx={{ fontWeight: "600", ml: 4 }} onClick={handleScrollToFeatures}>
                        Features
                    </Button>
                    <Button variant="outlined"
                        color="primary"
                        sx={{ fontWeight: "600", mr: 3, ml: 3 }}
                        component={RouterLink} to="/login">
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
                    component={RouterLink}
                    to="/register"
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
                <Container ref={featuresRef} maxWidth="md" sx={{ fontWeight: '400', lineHeight: 1.6, mt: 13, mb: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', letterSpacing: '0.10em', mb: 5 }} >
                        Features
                    </Typography>
                    <Stack container spacing={4}>
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

            {/* Features Section */}
            
            {/* Footer Section */}
            <Box sx={{ backgroundColor: '#f4f6f7', py: 3, mt: 'auto' }}>
                <Container maxWidth="md">
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            About Cashly
                        </Typography>
                        <Typography variant="body2">
                            Cashly helps you manage your finances effortlessly. Stay on top of your expenses and achieve your financial goals.
                        </Typography>
                    </Grid>
                    <Typography variant="body2" align="center">
                        � 2024 Cashly. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;
