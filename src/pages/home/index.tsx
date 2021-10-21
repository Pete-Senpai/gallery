import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
            <Container>
                <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '400px', width: "100%" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography align="center" borderBottom={1}>
                                <h1>Pet Portraits & Commissions</h1>
                            </Typography>
                            <Typography>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Card>
                                <CardMedia 
                                    component="img"
                                    image={"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.6435-9/241813029_4851381168313141_1523254842365993390_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeFcPr5tm1sGSE40M_y5qAttp42ACN6CUZinjYAI3oJRmMzkkos_EBdb5waLU5rY0rPGAVYPUw-DaejmRc8ddxTy&_nc_ohc=tnCmVpAxAo4AX9EMtKo&_nc_ht=scontent.fbeg1-1.fna&oh=c79d2a00ab3e867184ed672a55bf49ae&oe=616BDE9D"}
                                    alt="photo"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '400px', width: "100%" }}>
                    <Grid container spacing ={2}>
                        <Grid item xs={6}>
                            <Card>
                                <CardMedia 
                                    component="img"
                                    image={"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.6435-9/209559220_4625822674202326_5716549258690711660_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeEFHbgGQ4AaVAKUQ1eKlfmQjqHoZbQwo9qOoehltDCj2vsLKnghvfbnn8SgJSDvyz1DTXGEeue1vhiCysLfFrFd&_nc_ohc=kPAnpEJmguwAX9K55Bg&_nc_ht=scontent.fbeg1-1.fna&oh=ece283053438816661cf647b7df09e78&oe=616D3827"}
                                    alt="photo"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography align="center" borderBottom={1}>
                                <h1>Original Artwork</h1>
                            </Typography>
                            <Typography>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '400px', width: "100%" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography align="center" borderBottom={1}>
                                <h1>Gallery</h1>
                            </Typography>
                            <Typography>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Card>
                                <CardMedia 
                                    component="img"
                                    image={"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.6435-9/232396320_4729118877206038_9067115924514914984_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeGp0eUX1gIaIp1MUX43j8hc9C3r4-EMNTX0Levj4Qw1NVUL0WPSBMBE6YR70kR9nRw8l9e11MFZxbgjMsbBLR-l&_nc_ohc=ZcS7P7qEqywAX_TtmMA&_nc_ht=scontent.fbeg1-1.fna&oh=af07bbdf8934cba8fd862abc9b9032a0&oe=616D4F9E"}
                                    alt="photo"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '400px', width: "100%" }}>
                    <Grid container spacing ={2}>
                        <Grid item xs={6}>
                            <Card>
                                <CardMedia 
                                    component="img"
                                    image={"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.6435-9/239468282_4772962376155021_5895707963065349972_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeGka-vM_rkcTCzPvPgbU8a5UtFVQorY2cpS0VVCitjZyugPsr6WgVhcbFxbziP3zQYtbIM_S08V_lbKy-KRf-tw&_nc_ohc=E6MxPXtFia4AX8as8SR&_nc_ht=scontent.fbeg1-1.fna&oh=43fbc7be956fb2b2efc36205844d23a9&oe=616B8A87"}
                                    alt="photo"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography align="center" borderBottom={1}>
                                <h1>Prints</h1>
                            </Typography>
                            <Typography>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    );
};

export default Home;
