import React from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container, Typography, Box } from "@mui/material";
import { Home } from "@mui/icons-material";
import SearchBar from '../searchBar/SearchBar';
import { useHistory } from 'react-router-dom';

const navLinks = [
    { title: `gallery`, path: `/gallery` },
    { title: `contact`, path: `/contact` },
    { title: `faq`, path: `/faq` },
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
                    <Typography>Sarah-Jane Art</Typography>
                    <List component="nav" aria-labelledby="main navigation" sx={{display: "flex", justifyContent: "space-between"}}>
                        {navLinks.map(({ title, path }) => (
                            <Box onClick={() => history.push(path)} key={title} sx={{textDecoration: "none", textTransform: "uppercase", color: "white"}}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </Box>
                        ))}
                        <ListItem>
                            <SearchBar />
                        </ListItem>
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;