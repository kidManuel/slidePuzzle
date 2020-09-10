import React from 'react';
import { Provider } from "react-redux";
import store from "./store/store";

import './App.css';
import { SlidePuzzle } from './components/';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SlidePuzzle
          size={4}
          showNumbers={true}
        />
      </div>
    </Provider>
  );
}

export default App;
