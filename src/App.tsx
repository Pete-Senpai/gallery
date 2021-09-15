import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Home from 'pages/home';
import Gallery from 'pages/gallery';
import Contact from 'pages/contact';
import FAQ from 'pages/faq';
import NavBar from 'components/navBar';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    width: '100%',
    height: '100%'
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: purple[600],
    },
  },
});

const App = () => {
  const styles = useStyles();

  return (
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
  );
};

export default App;
