import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import Header from './components/Header.jsx';
import { getcharacters, getSearchedcharacters } from './service/character';
import Characters from './components/Characters';

const App = (props) => {
  useEffect(() => {
    props.getcharacters();
  }, []);

  const getText = (text) => {
    props.getSearchedcharacters(text);
  };

  return (
    <Box>
      <Header getText={getText} />
      <Characters data={props.characters} isLoading={props.isLoading} />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  characters: state.character.characters,
  isLoading: state.character.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getcharacters: () => dispatch(getcharacters()),
  getSearchedcharacters: (text) => dispatch(getSearchedcharacters(text)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
