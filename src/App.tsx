import React from 'react';
import './App.css';
import { SlidePuzzle } from './components/';

function App() {
  return (
    <div className="App">
      <SlidePuzzle
        size={4}
        showNumbers={true}
      />
    </div>
  );
}

export default App;
