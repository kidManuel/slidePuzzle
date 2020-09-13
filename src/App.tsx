import React from 'react';
import { Provider } from "react-redux";
import store from "./store/store";

import useStyles from './styles';
import { SlidePuzzle, Settings } from './components/';

function App() {
  const {
    AppContainer
  } = useStyles();

  return (
    <Provider store={store}>
      <div className={AppContainer}>
        <SlidePuzzle />
        <Settings />
      </div>
    </Provider >
  );
}

export default App;
