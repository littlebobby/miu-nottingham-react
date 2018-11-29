import React from 'react';
import { Button, Icon, EventDetail, EventListContainer, Homepage, SignIn, SignUp, CreateEvent } from 'components';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.scss'

export default function App1() {
  return (
    <div className={styles.but}>
      <Route path='/create' component={CreateEvent} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route exact path='/' component={Homepage} />
      <Route path='/event/:id' component={EventDetail} />
    </div>
  )
}
