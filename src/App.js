import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import EventNew from './components/event_new';
import Navbar from './components/Navbar';
import Slideshow from './components/slideshow/Slideshow';

import {imagesData as data_images} from './data/data'
import EventList from './containers/EventList';
import SigninForm from './containers/signin/SigninForm';

class App extends Component {
  submit = values => {
    values.preventDefault()
    console.log(values);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Slideshow images={data_images}/> */}
        <EventList />
        <SigninForm handleSubmit={this.submit} />
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
