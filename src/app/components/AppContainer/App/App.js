import React from 'react';
import { Button, Icon, EventDetail, EventListContainer, Homepage, SignIn, SignUp, CreateEvent, Nav } from 'components';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.scss'

export default function App() {
  return (
    <div className={styles.but}>
      <Nav />
      <Route path='/create' component={CreateEvent} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route exact path='/' component={Homepage} />
      <Route path='/event/:id' component={EventDetail} />
    </div>
  )
}
