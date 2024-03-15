import { Box, Card, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
    return (
        <Container>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '600px', width: "100%", justifyContent: "center", alignItems: "center"}}>
                <Grid container spacing ={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia 
                                component="img"
                                image={'/images/duck_pictures/duck3.jpg'}
                                alt="photo"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align="center" borderBottom={1}>
                            <h1>About ducks</h1>
                        </Typography>
                        <Typography fontFamily="Casual" fontSize={18}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        </Typography>
                        <Grid>
                            <Typography>Google page:</Typography>
                            <a href="https://www.google.com" target="_blank" rel="noreferrer">
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="home"
                                    size="large">
                                    <FacebookIcon fontSize="large" />
                                </IconButton>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="home"
                                    size="large">
                                    <InstagramIcon fontSize="large" />
                                </IconButton>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box id="faq" m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '800px', width: "100%", justifyContent: "center", alignItems: "center"}}>
                <Typography align="center" borderBottom={2}>
                    <h1>FAQ</h1>
                </Typography>
                <Typography>
                    <h2>Lorem</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h2>Lorem</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h2>Lorem</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h2>Lorem</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h2>Lorem</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Typography>
            </Box>
        </Container>
    );
};

export default About;