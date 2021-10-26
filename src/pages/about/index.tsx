import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Container>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '500px', width: "100%" }}>
                    <Grid container spacing ={2}>
                        <Grid item xs={6}>
                            <Card>
                                <CardMedia 
                                    component="img"
                                    image={"/images/about_pic.jpg"}
                                    alt="photo"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography align="center" borderBottom={1}>
                                <h1>About me</h1>
                            </Typography>
                            <Typography>
                                <p>I'm 32 year old self taught artist,  based on the south coast of England, who has always had a passion for art.</p>
                                <p>I started my venture into art at a very young age and have continued to follow my passion and love for all things art into my adult years. </p>
                                <p>Unlike many artists, I don't have a preferred subject or medium that I like to follow. To me, art is about the consistent growth of one's skills, and always looking to improve, and take on new challenges.</p>
                                <p>I offer a wide array of art work, from pet portraiture, wild life, abstracts , digital art , landscapes and botanicals. </p>
                                <p>To me, there's never a "fail" in an art piece, as for every hiccup, there's beauty and something to learn from each new experience. </p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
        </Container>
    );
};

export default About;