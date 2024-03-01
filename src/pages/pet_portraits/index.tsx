import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const PetPortraits = () => {
    return (
        <Container>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '600px', width: "100%", justifyContent: "center", alignItems: "center"}}>
                <Grid container spacing ={2}>
                    <Grid item xs={5}>
                        <Typography align="center" borderBottom={1}>
                            <h1>Lorem Ipsum</h1>
                        </Typography>
                        <Typography>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container spacing ={1}>
                            <Grid item xs={6}>
                                <img src={"/images/duck_pictures/duck3.jpg"} alt="img" height="270px" width="300px" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={"/images/duck_pictures/duck3.jpg"} alt="img" height="270px" width="300px" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={"/images/duck_pictures/duck3.jpg"} alt="img" height="270px" width="300px" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={"/images/duck_pictures/duck3.jpg"} alt="img" height="270px" width="300px" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Typography align="center" borderBottom={2}>
                <h1>Sizes & Pricing</h1>
            </Typography>
            <Typography align="center">Size references</Typography>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '500px', width: "100%", justifyContent: "center", alignItems: "center"}}>
                <Grid container spacing ={2}>
                    <Grid item xs={5}>
                        <img src={"/images/Pets/17846820302631474.jpg"} alt="img" height="450px" width="450px" />
                    </Grid>
                    <Grid item xs={7}>
                        <Typography align="center">
                            <h1>Coloured pencil</h1>
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Typography>Paper size</Typography>
                                <Typography>5 x 7"</Typography>
                                <Typography>6 x 8"</Typography>
                                <Typography>7 x 7"</Typography>
                                <Typography>8 x 8"</Typography>
                                <Typography>8 x 10"</Typography>
                                <Typography>9 x 12"</Typography>
                                <Typography>11 x 14"</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>One pet</Typography>
                                <Typography>£ 55.00</Typography>
                                <Typography>£ 80.00</Typography>
                                <Typography>£ 80.00</Typography>
                                <Typography>£ 110.00</Typography>
                                <Typography>£ 138.00</Typography>
                                <Typography>£ 185.00</Typography>
                                <Typography>£ 274.00</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>Two pets</Typography>
                                <Typography>£ -</Typography>
                                <Typography>£ 95.00</Typography>
                                <Typography>£ -</Typography>
                                <Typography>£ -</Typography>
                                <Typography>£ 170.00</Typography>
                                <Typography>£ 238.00</Typography>
                                <Typography>£ 335.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '500px', width: "100%", justifyContent: "center", alignItems: "center"}}>
                <Grid container spacing ={2}>
                    <Grid item xs={7}>
                        <Typography align="center">
                            <h1>Graphite</h1>
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Typography>Paper size</Typography>
                                <Typography>5 x 7"</Typography>
                                <Typography>6 x 8"</Typography>
                                <Typography>7 x 7"</Typography>
                                <Typography>8 x 8"</Typography>
                                <Typography>8 x 10"</Typography>
                                <Typography>9 x 12"</Typography>
                                <Typography>11 x 14"</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>One pet</Typography>
                                <Typography>£ 40.00</Typography>
                                <Typography>£ 70.00</Typography>
                                <Typography>£ 70.00</Typography>
                                <Typography>£ 90.00</Typography>
                                <Typography>£ 112.00</Typography>
                                <Typography>£ 142.00</Typography>
                                <Typography>£ 200.00</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>Two pets</Typography>
                                <Typography>£ -</Typography>
                                <Typography>£ 88.00</Typography>
                                <Typography>£ -</Typography>
                                <Typography>£ -</Typography>
                                <Typography>£ 148.00</Typography>
                                <Typography>£ 165.00</Typography>
                                <Typography>£ 248.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={"/images/Pets/18082059610221569_edited.jpg"} alt="img" height="450px" width="450px" />
                    </Grid>
                </Grid>
            </Box>
            <Box id="faq" m={2} pt={1} px={2} sx={{ bgcolor: '#cfe8fc', height: '400px', width: "100%", justifyContent: "center", alignItems: "center"}}>
                <Typography align="center" borderBottom={2}>
                    <h1>Lorem Ipsum</h1>
                </Typography>
                <Typography>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </Typography>
            </Box>
        </Container>
    );
};

export default PetPortraits;