import React from 'react';
import { Button, Icon, EventDetail, EventListContainer } from 'components';
import duckSVG from '../../../../assets/duck.svg'
import styles from './App.module.scss'
// import duckSVG from '../../../assets'

export default function App1() {
  return (
    <div className={styles.but}>
    <EventDetail />
    <EventListContainer />
      {/* <Button>
        <Icon url={duckSVG} alt='going' />
      </Button> */}
    </div>
  )
}
