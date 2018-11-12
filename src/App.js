import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import EventNew from './components/event_new';
import Navbar from './components/navbar';
import Slideshow from './components/slideshow/slideshow';

import {images as data_images} from './data/data_images'
import EventList from './containers/EventList';
import ReduxTest from './containers/ReduxTest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ReduxTest />
        {/* <Slideshow images={data_images}/> */}
        <EventList />
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
