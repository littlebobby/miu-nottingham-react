import React, { Component } from 'react';
import './App.css';

import Slideshow from './components/slideshow'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Slideshow />
      </div>
    );
  }
}

export default App;
