import { Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from '@mui/material';
import ExpandItem from 'components/expandItem';
import React from 'react';

const photos = [
    {
        photo:"/images/duck_pictures/duck.png",
        title:"Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        photo:"/images/duck_pictures/duck.png",
        title:"Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        photo:"/images/duck_pictures/duck.png",
        title:"Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        photo:"/images/duck_pictures/duck.png",
        title:"Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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