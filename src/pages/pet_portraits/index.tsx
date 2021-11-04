import { Box, Container, Grid, Typography, Card, CardMedia } from '@mui/material';
import React from 'react';

const PetPortraits = () => {
    return (
        <Container>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '600px', width: "100%", justifyContent: "center", alignItems: "center"}}>
                <Grid container spacing ={2}>
                    <Grid item xs={5}>
                        <Typography align="center" borderBottom={1}>
                            <h1>Pet Portraits & Commissions</h1>
                        </Typography>
                        <Typography>
                            <p>During the creation process, I will keep you up to date with the progression and to make sure that you are one-hundred percent satisfied with the drawing.</p>
                            <p>Once complete your portrait will come as unframed and unmounted, if you desire to have the picture finished with mount and frame then please contact me for a quote.</p>
                            <p>Your completed portrait will also come with a signed certificate of authenticity.</p>
                            <p>Required is a non refundable deposit of fifty percent of the total cost. The remainder must be paid in full before I post your portrait to you.</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container spacing ={1}>
                            <Grid item xs={4}>
                                <Card>
                                    <CardMedia 
                                        component="img"
                                        image={"/images/Pets/17846820302631474.jpg"}
                                        alt="photo"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardMedia 
                                        component="img"
                                        image={"/images/Pets/17877850324944866_edited.jpg"}
                                        alt="photo"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardMedia 
                                        component="img"
                                        image={"/images/Pets/17895221188716237.jpg"}
                                        alt="photo"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardMedia 
                                        component="img"
                                        image={"/images/Pets/17913331981535469_edited.jpg"}
                                        alt="photo"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardMedia 
                                        component="img"
                                        image={"/images/Pets/18047390827061610_edited.jpg"}
                                        alt="photo"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardMedia 
                                        component="img"
                                        image={"/images/Pets/18082059610221569_edited.jpg"}
                                        alt="photo"
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default PetPortraits;