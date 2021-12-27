import { Box, Card, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
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
                                image={"/images/about_pic.jpg"}
                                alt="photo"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align="center" borderBottom={1}>
                            <h1>About me</h1>
                        </Typography>
                        <Typography fontFamily="Casual" fontSize={18}>
                            <p>I'm 32 year old self taught artist,  based on the south coast of England, who has always had a passion for art.</p>
                            <p>I started my venture into art at a very young age and have continued to follow my passion and love for all things art into my adult years. </p>
                            <p>Unlike many artists, I don't have a preferred subject or medium that I like to follow. To me, art is about the consistent growth of one's skills, and always looking to improve, and take on new challenges.</p>
                            <p>I offer a wide array of art work, from pet portraiture, wild life, abstracts , digital art , landscapes and botanicals. </p>
                            <p>To me, there's never a "fail" in an art piece, as for every hiccup, there's beauty and something to learn from each new experience. </p>
                        </Typography>
                        <Grid>
                            <Typography>My Socials:</Typography>
                            <a href="https://www.facebook.com/SarahJaneArts/" target="_blank" rel="noreferrer">
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="home"
                                    size="large">
                                    <FacebookIcon fontSize="large" />
                                </IconButton>
                            </a>
                            <a href="https://www.instagram.com/sarah_jane_arts/" target="_blank" rel="noreferrer">
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
                    <h2>How much is delivery within the UK?</h2>
                    <p>Shipping is 99p when £3.50 or less is spent, £2.99 for orders between £3.50 and £50, then free when £50 or more is spent.</p>
                    <h2>Do you provide International delivery?</h2>
                    <p>Yes I do. Standard international shipping is £9.99. Orders below £5 are £4 to ship.</p>
                    <h2>What is your returns policy?</h2>
                    <p>If you are unhappy with an item, or the item is damaged in transit, please contact me and I can either send you out a replacement, or give you a full refund.</p>
                    <h2>How do I order a pet portrait?</h2>
                    <p>To order a pet portrait please email me at email.sarahjanearts@gmail.com. I do require a 50% deposit before starting the portrait, which we can arrange via email.</p>
                    <h2>I am interested in purchasing one of your original artworks. How do I do this?</h2>
                    <p>You can purchase my originals directly on my website. If you have any further questions please email me at email.sarahjanearts@gmail.com .If you require international shipping for an original artwork, please contact me before purchasing as there will be an additional shipping cost.</p>
                    <h2>I would like my pet portrait framed, do you offer framing?</h2>
                    <p>Yes I do. When ordering your pet portrait we can discuss framing options and I can give you a quote.</p>
                </Typography>
            </Box>
        </Container>
    );
};

export default About;