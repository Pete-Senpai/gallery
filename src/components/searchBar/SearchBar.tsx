import React from 'react';
import { alpha, Theme } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
        width: '20ch',
        },
      },
    },
  }),
);

const SearchBar = () => {
    const classes = useStyles();
    return (
        <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </Box>
    );
};

export default SearchBar;