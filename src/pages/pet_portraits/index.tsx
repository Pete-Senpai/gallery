import { Box, Container, Grid, Typography } from '@mui/material';
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
                            <Grid item xs={6}>
                                <img src={"/images/Pets/17846820302631474.jpg"} alt="img" height="270px" width="300px" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={"/images/Pets/17895221188716237.jpg"} alt="img" height="270px" width="300px" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={"/images/Pets/18047390827061610_edited.jpg"} alt="img" height="270px" width="300px" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={"/images/Pets/18082059610221569_edited.jpg"} alt="img" height="270px" width="300px" />
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
                        <Typography>
                            <p>During the creation process, I will keep you up to date with the progression and to make sure that you are one-hundred percent satisfied with the drawing.</p>
                            <p>Once complete your portrait will come as unframed and unmounted, if you desire to have the picture finished with mount and frame then please contact me for a quote.</p>
                            <p>Your completed portrait will also come with a signed certificate of authenticity.</p>
                            <p>Required is a non refundable deposit of fifty percent of the total cost. The remainder must be paid in full before I post your portrait to you.</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box m={2} pt={3} px={2} sx={{ bgcolor: '#cfe8fc', height: '500px', width: "100%", justifyContent: "center", alignItems: "center"}}>
                <Grid container spacing ={2}>
                    <Grid item xs={7}>
                        <Typography align="center">
                            <h1>Coloured pencil</h1>
                        </Typography>
                        <Typography>
                            <p>During the creation process, I will keep you up to date with the progression and to make sure that you are one-hundred percent satisfied with the drawing.</p>
                            <p>Once complete your portrait will come as unframed and unmounted, if you desire to have the picture finished with mount and frame then please contact me for a quote.</p>
                            <p>Your completed portrait will also come with a signed certificate of authenticity.</p>
                            <p>Required is a non refundable deposit of fifty percent of the total cost. The remainder must be paid in full before I post your portrait to you.</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={"/images/Pets/18082059610221569_edited.jpg"} alt="img" height="450px" width="450px" />
                    </Grid>
                </Grid>
            </Box>
            <Box id="faq" m={2} pt={1} px={2} sx={{ bgcolor: '#cfe8fc', height: '400px', width: "100%", justifyContent: "center", alignItems: "center"}}>
                <Typography align="center" borderBottom={2}>
                    <h1>Additional information</h1>
                </Typography>
                <Typography>
                    <p>* If you would like additional subjects to any piece that contains two pets, contact me for further information. </p>
                    <p>* Prices listed above are for all images that are unmounted and unframes, if you would like your image mounted and framed, please contact me for a quote. </p>
                    <p>* In addition to the sizes listed above, there are options for larger images, for further information contact me for variant sizes and prices. (x)</p>
                    <p>* Pricing stated, do not include the delivery charges. As standard I charge £4.00 for all sizes from 11x14" to 5x7", additional charging may apply for any sizes grater then listed above. All products come securely packed, tracked and to be signed for. </p>
                    <p>* International currency conversions available.</p>
                </Typography>
            </Box>
        </Container>
    );
};

export default PetPortraits;