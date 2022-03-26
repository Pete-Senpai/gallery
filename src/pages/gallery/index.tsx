import { Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from '@mui/material';
import ExpandItem from 'components/expandItem';
import React from 'react';

const photos = [
    {
        photo:"/images/Pets/Mama_share_with_me.jpg",
        title:"Mom Dog with her pup",
        description: "A goldie mother and her pup, shearing a chewbone. Poloychomes and markers on A4."
    },
    {
        photo:"/images/Abstract/Neptunes_gaze.jpg",
        title:"Neptunes gaze",
        description: "Abstract acrylic pour on a 30 inch round canvas."
    },
    {
        photo:"/images/Default/lion.jpg",
        title:"Lion"

    },
    {
        photo:"/images/Pets/Puppies_and_ties.jpg",
        title:"Two puppies",
        description: "Pet portrait of two cute puppy goldies, with red ribbon statement piece. A3 mixmedia paper in poloychomes."
    }
];

const Gallery = () => {
    return (
        <Container>
            <ExpandItem />
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
                            <CardContent>
                                <Typography>
                                    {photos.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Gallery;