import { Card, CardHeader, CardMedia, Container, Grid } from '@mui/material';
import React from 'react';

const photos = [
    {
        photo:"/images/Pets/17846820302631474.jpg",
        title:"Mom Dog with her pup"
    },
    {
        photo:"/images/Abstract/Neptune.jpg",
        title:"Neptune"
    },
    {
        photo:"/images/lion.jpg",
        title:"Lion"
    },
    {
        photo:"/images/Pets/17895221188716237.jpg",
        title:"Two puppies"
    }
];

const Gallery = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                {photos.map(photos => (
                    <Grid item key={photos.photo} xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader
                                title={photos.title}
                            />
                            <CardMedia 
                                component="img"
                                height="100%"
                                image={photos.photo}
                                alt="photo"
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Gallery;