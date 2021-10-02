import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Home from 'pages/home';
import Gallery from 'pages/gallery';
import Contact from 'pages/contact';
import FAQ from 'pages/faq';
import NavBar from 'components/navBar';
import { makeStyles } from '@mui/styles';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const useStyles = makeStyles({
  content: {
    display: 'flex',
    width: '100%',
    height: '100%'
  }
});

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
  const styles = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <NavBar />
            <div className={styles.content}>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/gallery' exact component={Gallery} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/faq' exact component={FAQ} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
