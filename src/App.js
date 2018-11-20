import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import EventNew from './components/event_new';
import Navbar from './components/Navbar';
import Slideshow from './components/slideshow/Slideshow';

import {imagesData as data_images} from './data/data'
import EventList from './containers/EventList';
import Nav from './components/layout/Nav';
import EventDetails from './components/event/event_detail.js/EventDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        {/* <Navbar /> */}
        {/* <Slideshow images={data_images}/> */}
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />

          <Route path='/new' component={EventNew} />
          <Route exact path='/' component={EventList} />
          <Route path='/event/:id' component={EventDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
