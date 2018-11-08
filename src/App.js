import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import EventNew from './components/event_new';
import Navbar from './components/navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
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
