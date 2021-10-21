import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Home from 'pages/home';
import Gallery from 'pages/gallery';
import Contact from 'pages/contact';
import About from 'pages/about';
import OriginalArtwork from 'pages/original_artwork';
import PetPortraits from 'pages/pet_portraits';
import NavBar from 'components/navBar';
import Footer from 'components/footer';
import { Box, CssBaseline } from '@mui/material';

const theme = createTheme(({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: purple[600],
    },
  },
}));

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box>
            <CssBaseline />
            <NavBar />
            <Box component="main" sx={{display: "flex", width: "100%", height: "100%"}}>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/original_artwork' exact component={OriginalArtwork} />
                <Route path='/pet_portraits' exact component={PetPortraits} />
                <Route path='/gallery' exact component={Gallery} />
                <Route path='/contact' exact component={Contact} />
              </Switch>
            </Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
