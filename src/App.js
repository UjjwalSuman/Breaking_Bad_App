import { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import Header from "./components/Header.jsx";
import { getcomponents, getSearchedComponents } from "./service/component";
import Characters from "./components/Characters";

const App = (props) => {
  useEffect(() => {
    props.getComponents();
  }, []);

  const getText = (text) => {
    props.getSearchedComponents(text);
  };

  return (
    <Box>
      <Header getText={getText} />
      <Characters data={props.components} isLoading={props.isLoading} />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  s: state.components.components,
  isLoading: state.components.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getComponents: () => dispatch(getComponent()),
  getSearchedComponents: (text) => dispatch(getSearchedComponents(text)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
