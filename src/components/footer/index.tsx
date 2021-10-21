import { Box, Button, Container, Grid, Link } from '@mui/material';
import React from 'react';

const Footer = () => {
    return(
        <footer>
            <Box 
                px={{xs: 3, sm: 10}}
                py={{xs: 5, sm: 10}}
                bgcolor="text.secondary" 
                color="white"
                position="sticky"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Contact Us</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    email
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>We Accept</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    cards
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button href="/about" variant="outlined">
                                FAQ
                            </Button>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                        Sarah-Jane Art &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;