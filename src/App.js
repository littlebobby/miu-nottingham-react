import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import EventNew from './components/event_new';
import Navbar from './components/navbar';
import Slideshow from './components/slideshow/slideshow';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Slideshow />
        <Switch>
          <Route path='/new' component={EventNew} />
        </Switch>
        {/* <Slideshow /> */}
        {/* <EventNew /> */}
      </div>
    );
  }
}

export default App;
