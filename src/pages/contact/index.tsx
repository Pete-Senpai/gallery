import { Container, Box } from '@mui/material';
import React from 'react';
import SubCategory from '../../components/carousel/subCategory'

const Contact = () => {
    return (
        <Container>
            <Box m={2} p={2} sx={{ bgcolor: '#cfe8fc', height: "450px", width: "100%" }}>
                <SubCategory items={[]}></SubCategory>
            </Box>
        </Container>
        
    );
};

export default Contact;