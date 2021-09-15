import React from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, makeStyles, Container } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import SearchBar from '../searchBar/SearchBar';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }
});

const navLinks = [
    { title: `gallery`, path: `/gallery` },
    { title: `contact`, path: `/contact` },
    { title: `faq`, path: `/faq` },
];

const NavBar = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
                    <IconButton onClick={() => history.push('/')} edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large" />
                    </IconButton>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                        {navLinks.map(({ title, path }) => (
                            <div onClick={() => history.push(path)} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </div>
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