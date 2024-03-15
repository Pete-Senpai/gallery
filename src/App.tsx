import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Home from 'pages/home';
import Gallery from 'pages/gallery';
import RandomDuck from 'pages/random_duck';
import About from 'pages/about';
import OriginalDuck from 'pages/original_duck';
import PurchaseADuck from 'pages/purchase_a_duck';
import NavBar from 'components/navBar';
import Footer from 'components/footer';
import { Box, CssBaseline } from '@mui/material';

const theme = createTheme(({
  palette: {
    primary: {
      main: purple[400],
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
            <Box component="main" sx={{display: "flex", width: "100%", height: "100%", backgroundColor: '#c9c6c6'}}>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/original_duck' exact component={OriginalDuck} />
                <Route path='/purchase_a_duck' exact component={PurchaseADuck} />
                <Route path='/gallery' exact component={Gallery} />
                <Route path='/random_duck' exact component={RandomDuck} />
              </Switch>
            </Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
