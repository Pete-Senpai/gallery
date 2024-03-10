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
// const images = mapPictures(require.context("../../../public/images/duck_pictures", false, /\.(png|jpe?g|svg)$/));

const Home = () => {
    return (
        <Container>
            <Box m={2} p={1} sx={{ bgcolor: '#cfe8fc', height: "570px", width: "100%",paddingTop: 0 }}>
                <Typography variant="h1" borderBottom={3} fontFamily="Niconne" fontSize={60} sx={{display: "flex", position: "static", justifyContent: "center", height: "100px", paddingTop: 0}}>
                    Lorem Ipsum
                </Typography>
                <Typography align="center" fontFamily="Basic" fontSize={22} >
                    Cute pictures of ducks
                </Typography>
                <Carousel>
                    <SubCategory item1={"/images/duck_pictures/duck.png"} item2={"/images/duck_pictures/duck2.jpg"} item3={"/images/duck_pictures/duck3.jpg"}></SubCategory>
                    <SubCategory item1={"/images/duck_pictures/duck.png"} item2={"/images/duck_pictures/duck3.jpg"} item3={"/images/duck_pictures/duck4.jpg"}></SubCategory>
                    <SubCategory item1={"/images/duck_pictures/duck.png"} item2={"/images/duck_pictures/duck2.jpg"} item3={"/images/duck_pictures/duck3.jpg"}></SubCategory>
                </Carousel>
            </Box>
            <HomePageBox header="Pet Portraits & Commissions" hrefLink="/pet_portraits" buttonText="See Prices" imageSrc="/images/duck_pictures/duck.png" isReversed>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </HomePageBox>
            <HomePageBox header="Original Artwork" hrefLink="/original_artwork" buttonText="Original Artwork" imageSrc="/images/duck_pictures/duck.png">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </HomePageBox>
            <HomePageBox header="Gallery" hrefLink="/gallery" buttonText="Gallery" imageSrc="/images/duck_pictures/duck.png" isReversed>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </HomePageBox>
            <HomePageBox header="Prints" hrefLink="/pet_portraits" buttonText="See Prices" imageSrc="/images/duck_pictures/duck.png">
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                
            </HomePageBox>
        </Container>
    );
};

export default Home;
