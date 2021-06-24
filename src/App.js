import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import Header from './components/Header';
import { getcharacters } from './service/character';
import Characters from './components/Characters';

const App = (props) => {
  const { characters, isLoading } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    props.getcharacters();
  }, []);

  useEffect(() => {
    setData(characters);
  }, [characters]);

  const getText = (text) => {
    setData(characters);
    if (text.length !== 0) {
      const filteredCharacter = characters.filter((el) => {
        const name = el.name.toLowerCase();
        const getData = name.includes(text.toLowerCase());
        return getData;
      });
      setData(filteredCharacter);
    } else {
      setData(characters);
    }
  };

  return (
    <Box>
      <Header getText={getText} />
      <Characters data={data} isLoading={isLoading} />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  characters: state.character.characters,
  isLoading: state.character.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getcharacters: () => dispatch(getcharacters()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
