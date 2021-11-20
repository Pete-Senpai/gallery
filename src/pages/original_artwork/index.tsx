import { Container, Grid } from '@mui/material';
import React from 'react';

function mapPictures(context: __WebpackModuleApi.RequireContext) {
    return context.keys().map((key) => context(key).default as string);
}
const images = mapPictures(require.context("../../../public/images/Abstract", false, /\.(png|jpe?g|svg)$/));

const OriginalArtwork = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                {images.map(image => 
                    <Grid item key={image} xs={12} md={6} lg={4}>
                        <img src={image} alt="img" />
                    </Grid>    
                )}
            </Grid>
        </Container>
    );
};

export default OriginalArtwork;