import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh'}}/>
            </Container>
        </React.Fragment>
    );
};

export default Home;
