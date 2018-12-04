import React from 'react'
import cssModules from './Slide.module.scss'
 export default function Slide(props) {
  const styles = {
		backgroundImage: `url(${props.image})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '80vh',
	} 
  return (
    <div className={cssModules.slide} style={styles}>
      
    </div>
  )
}