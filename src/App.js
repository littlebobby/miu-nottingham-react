import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import EventNew from './components/event_new';
import Slideshow from './components/slideshow/Slideshow';

import {imagesData as data_images} from './data/data'
import Nav from './components/layout/Nav';
import EventDetails from './components/event/event_detail.js/EventDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateEvent from './components/project/CreateEvent'
import Homepage from './components/layout/Homepage';

import App1 from './app/components/AppContainer/App/App'



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        
        {/* <Slideshow images={data_images}/> */}
        {/* <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateEvent} />

          <Route path='/new' component={EventNew} />
          <Route exact path='/' component={Homepage} />
          <Route path='/event/:id' component={EventDetails} />
        </Switch> */}
        <App1 />
      </div>
    );
  }
}

export default App;
