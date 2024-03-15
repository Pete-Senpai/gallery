import React from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container, Typography, Box } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useHistory } from 'react-router-dom';
import "@fontsource/niconne/400.css";

const navLinks = [
    { title: `about`, path: `/about` },
    { title: `original duck`, path: `/original_duck` },
    { title: `purchase a duck`, path: `/purchase_a_duck`},
    { title: `gallery`, path: `/gallery` },
    { title: `random duck`, path: `/random_duck` }
];

const NavBar = () => {
    const history = useHistory();
    return (
        <AppBar sx={{position: "sticky", top: 0}}>
            <Toolbar>
                <Container maxWidth="xl" sx={{display: "flex", justifyContent: "space-between"}}>
                    <IconButton
                        onClick={() => history.push('/')}
                        edge="start"
                        color="inherit"
                        aria-label="home"
                        size="large">
                        <Home fontSize="large" />
                    </IconButton>
                    <Typography sx={{alignSelf: "center", fontSize: 30, borderBottom: 2, fontFamily: "Niconne"}}>Lorem Ipsum</Typography>
                    <List component="nav" aria-labelledby="main navigation" sx={{display: "flex", justifyContent: "space-between"}}>
                        {navLinks.map(({ title, path }) => (
                            <Box onClick={() => history.push(path)} key={title} sx={{textDecoration: "none", textTransform: "uppercase", color: "white", alignSelf: "center"}}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </Box>
                        ))}
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;