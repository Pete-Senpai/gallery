import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <Container>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '600px', width: "100%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography align="center" borderBottom={1}>
                            <h1>Pet Portraits & Commissions</h1>
                        </Typography>
                        <Typography>
                            <p>I adore drawing customers beloved pets, and seeing them come to life on the paper.</p>
                            <p>A pet portrait is a unique and special gift, and a wonderful way to capture a treasured memory to keep your pet with you forever.</p>
                            <p>I offer a wide variety of sizes, both framed and unframed options are available. Price range starts from £40 upwards so there is an option available for everyone. </p>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                height= "100%"
                                image={"/images/Pets/17846820302631474.jpg"}
                                alt="photo"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '600px', width: "100%" }}>
                <Grid container spacing ={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia 
                                component="img"
                                height= "100%"
                                image={"/images/Abstract/Neptune.jpg"}
                                alt="photo"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align="center" borderBottom={1}>
                            <h1>Original Artwork</h1>
                        </Typography>
                        <Typography>
                            <p>When creating original artwork, I always ensure that I use the highest quality and archival materials. This ensures that each piece will withstand the environment the artwork is placed in, protecting it from, light damage, fading and discolouration.</p>
                            <p>If you would like to purchase any of my original art pieces, or have any questions, please feel free to contact me on email</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '600px', width: "100%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography align="center" borderBottom={1}>
                            <h1>Gallery</h1>
                        </Typography>
                        <Typography>
                            <p>Aside from creating pet portraits, I also enjoy producing other forms of diverse artwork, so if you're interested in seeing more, you can find these in the gallery where a substantial amount of my other creations can be viewed.</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia 
                                component="img"
                                height= "100%"
                                image={"/images/lion.jpg"}
                                alt="photo"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '600px', width: "100%" }}>
                <Grid container spacing ={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardMedia 
                                component="img"
                                height= "100%"
                                image={"/images/Pets/17895221188716237.jpg"}
                                alt="photo"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align="center" borderBottom={1}>
                            <h1>Prints</h1>
                        </Typography>
                        <Typography>
                            <p>When creating original artwork, I always ensure that I use the highest quality and archival materials. This ensures that each piece will withstand the environment the artwork is placed in, protecting it from light damage, fading and discolouration.</p>
                            <p>If you would like to purchese any of my original art pieces, or have any questions, please feel free to contact me on my email</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
