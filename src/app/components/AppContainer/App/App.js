import React from 'react';
import { Button, Icon, EventDetail, EventListContainer, Homepage } from 'components';
import { Route, Switch } from 'react-router-dom';
import duckSVG from '../../../../assets/duck.svg'
import styles from './App.module.scss'
// import duckSVG from '../../../assets'

export default function App1() {
  return (
    <div className={styles.but}>
    {/* <EventDetail /> */}
    {/* <EventListContainer /> */}
    <Route exact path='/' component={Homepage} />
    <Route path='/event/:id' component={EventDetail} />
    {/* <Homepage /> */}
      {/* <Button>
        <Icon url={duckSVG} alt='going' />
      </Button> */}
    </div>
  )
}
