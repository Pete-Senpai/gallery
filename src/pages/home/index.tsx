import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import "@fontsource/niconne/400.css";
import SubCategory from '../../components/carousel/subCategory'

const HomePageBox = (props: { header: string, children: any, imageSrc: string, isReversed?: boolean, hrefLink: string, buttonText: string }) => 
<Box m={2} p={2} sx={{ bgcolor: '#cfe8fc', height: "450px", width: "100%" }}>
    <Grid sx={{ display: "flex", flexBasis: "50%", height: "100%", flexDirection: props.isReversed? "row-reverse" : "row" }}>
        <Grid sx={{ display: "flex", flexDirection: "column", gap: "10px", height: "100%" }}>
            <Typography align="center" borderBottom={1}>
                <h1>{props.header}</h1>
            </Typography>
            <Typography fontFamily="Casual" fontSize={18} >
                {props.children}
            </Typography>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "end" }}>
                <Button href= {props.hrefLink} variant="contained">{props.buttonText}</Button>
            </Box>
        </Grid>
        <img src={props.imageSrc} alt="img" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
    </Grid>
</Box>

// function mapPictures(context: __WebpackModuleApi.RequireContext) {
//     return context.keys().map((key) => context(key).default as string);
// }
// const images = mapPictures(require.context("../../../public/images/Abstract", false, /\.(png|jpe?g|svg)$/));

const Home = () => {
    return (
        <Container>
            <Box m={2} p={1} sx={{ bgcolor: '#cfe8fc', height: "570px", width: "100%",paddingTop: 0 }}>
                <Typography variant="h1" borderBottom={3} fontFamily="Niconne" fontSize={60} sx={{display: "flex", position: "static", justifyContent: "center", height: "100px", paddingTop: 0}}>
                    Sarah-Jane Arts
                </Typography>
                <Typography align="center" fontFamily="Basic" fontSize={22} >
                    Artwork - Commissions - Pet Portraits
                </Typography>
                <Carousel>
                    <SubCategory item1={"/images/originalArtwork/Dawn.jpg"} item2={"/images/originalArtwork/fish_copy.jpg"} item3={"/images/originalArtwork/rose_copy.jpg"}></SubCategory>
                    <SubCategory item1={"/images/originalArtwork/seaside.jpg"} item2={"/images/originalArtwork/Snowy_hills.jpg"} item3={"/images/originalArtwork/beach1.jpg"}></SubCategory>
                    <SubCategory item1={"/images/Abstract/Neptune.jpg"} item2={"/images/originalArtwork/Guiding_llight.jpg"} item3={"/images/originalArtwork/round_two.jpg"}></SubCategory>
                </Carousel>
            </Box>
            <HomePageBox header="Pet Portraits & Commissions" hrefLink="/pet_portraits" buttonText="See Prices" imageSrc="/images/Pets/17846820302631474.jpg" isReversed>
                <p>I adore drawing customers beloved pets, and seeing them come to life on the paper.</p>
                <p>A pet portrait is a unique and special gift, and a wonderful way to capture a treasured memory to keep your pet with you forever.</p>
                <p>I offer a wide variety of sizes, both framed and unframed options are available. Price range starts from £40 upwards so there is an option available for everyone. </p>
            </HomePageBox>
            <HomePageBox header="Original Artwork" hrefLink="/original_artwork" buttonText="Original Artwork" imageSrc="/images/Abstract/Neptune.jpg">
                <p>When creating original artwork, I always ensure that I use the highest quality and archival materials. This ensures that each piece will withstand the environment the artwork is placed in, protecting it from, light damage, fading and discolouration.</p>
                <p>If you would like to purchase any of my original art pieces, or have any questions, please feel free to contact me on email</p>
            </HomePageBox>
            <HomePageBox header="Gallery" hrefLink="/gallery" buttonText="Gallery" imageSrc="/images/Default/lion.jpg" isReversed>
                <p>Aside from creating pet portraits, I also enjoy producing other forms of diverse artwork, so if you're interested in seeing more, you can find these in the gallery where a substantial amount of my other creations can be viewed.</p>
            </HomePageBox>
            <HomePageBox header="Prints" hrefLink="/pet_portraits" buttonText="See Prices" imageSrc="/images/Pets/17895221188716237.jpg">
                <p>Website feature in progress. Website feature in progress. Website feature in progress. Website feature in progress. Website feature in progress. Website feature in progress. </p>
                
            </HomePageBox>
        </Container>
    );
};

export default Home;
