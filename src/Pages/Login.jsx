import React, { useState } from 'react';
import { Container, Box, Paper, TextField, Button, Typography, InputAdornment, IconButton, CssBaseline } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [isError, setIsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        setIsError(true);
    }

    const handleRegisterClick = () => {
        navigate('/signup');
    }

    return (
        <>
            <CssBaseline />
            <Box sx={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: 500,
                alignContent: 'center',
                height: '100vh',
                background: 'linear-gradient(180deg, #2CAFA4, #0194D3)'
            }}>
                <Typography variant="h4" sx={{ pb: 8, textAlign: 'center', color: '#FFFF' }}>Welcome Back!</Typography>
                <Container maxWidth="xs" component={Paper} sx={{ p: 3 }}>
                    <Box sx={{ p: 1, pt: 3 }}>
                        <TextField error={isError} helperText={isError ? "Invalid User ID" : ""} fullWidth label="User ID" variant="outlined" />
                    </Box>
                    <Box sx={{ p: 1, pt: 3 }}>
                        <TextField
                            type={showPassword ? "text" : "password"}
                            error={isError}
                            helperText={isError ? "Invalid Password" : ""}
                            fullWidth
                            label="Password"
                            variant="outlined"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </Box>
                    <Box sx={{ p: 1, pt: 9 }}>
                        <Button sx={{ bgcolor: '#2CAFA4' }} size="large" fullWidth onClick={validate} variant="contained">Login</Button>
                    </Box>
                    <Typography align="center" sx={{ pt: 2 }}>
                        Don't have an account? <br />
                        <Typography
                            component="span"
                            onClick={handleRegisterClick}
                            sx={{ color: '#2CAFA4', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Register here
                        </Typography>
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
