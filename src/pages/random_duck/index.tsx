import { Container, Box, Typography } from '@mui/material';
import React from 'react';
import CarouselOne from 'components/carousel';

const RandomDuck = () => {
    return (
        <Container>
            <Box m={2} p={1} sx={{ bgcolor: '#cfe8fc', height: "570px", width: "100%",paddingTop: 0 }}>
                <CarouselOne />
            </Box>
            <Typography>In progress</Typography>
        </Container> 
    );
};

export default RandomDuck;