import React from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  Box,
  InputBase,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import breakingBad from '../image/breaking_bad.jpg';

const useStyle = makeStyles({
  header: {
    backgroundColor: '#000',
    padding: 15,
    height: 150,
  },
  image: {
    width: '150px',
    height: '100px',
  },
  search: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    margin: 100,
    borderRadius: 10,
    position: 'relative',
  },
  inputBox: {
    color: 'inherit',
    margin: 10,
    marginLeft: 50,
  },
  searchicon: {
    position: 'absolute',
    marginLeft: 15,
    top: 13,
  },
});

const Header = ({ getText }) => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <img className={classes.image} src={breakingBad} alt="breaking_bad" />
        <Box className={classes.search}>
          <Box>
            <SearchIcon classes={{ root: classes.searchicon }} />
          </Box>
          <InputBase
            placeholder="Search By Name"
            autoFocus
            classes={{ root: classes.inputBox }}
            onChange={(e) => getText(e.target.value)}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
