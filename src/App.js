import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import EventNew from './components/event_new';
import Navbar from './components/Navbar';
import Slideshow from './components/slideshow/Slideshow';

import {imagesData as data_images} from './data/data'
import EventList from './containers/EventList';
import SigninForm from './containers/signin/SigninForm';
import Nav from './components/layout/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        {/* <Navbar /> */}
        {/* <Slideshow images={data_images}/> */}
        <Switch>
          <Route path='/signin' component={SigninForm} />
          <Route path='/new' component={EventNew} />
          <Route path='/' component={EventList} />
        </Switch>
      </div>
    );
  }
}

export default App;
