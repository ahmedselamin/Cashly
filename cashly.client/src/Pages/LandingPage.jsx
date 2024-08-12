import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LandingPage = () => {
    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography variant="h3" sx={{ flexGrow: 1, fontFamily: 'Dancing Script', fontWeight: "400" }}>
                        Cashly
                    </Typography>
                    <Button color="primary" sx={{ fontWeight: "500", ml: 3 }} component={RouterLink} to="/register">
                        About
                    </Button>
                    <Button variant="outlined" color="primary" sx={{ fontWeight: "500", mr:3, ml: 3 }} component={RouterLink} to="/login">
                        Login
                    </Button>                    
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ textAlign: 'center', mt: 15 }}>
                <Typography variant="h1" gutterBottom sx={{ letterSpacing: '0.10em' } } >
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
            </Container>
        </Box>
    );
};

export default LandingPage;
