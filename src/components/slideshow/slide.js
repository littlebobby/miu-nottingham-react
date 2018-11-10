import React from 'react'
import cssModules from './slideshow.module.css'

export default function Slide(props) {
  const styles = {
		backgroundImage: `url(${props.image})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '80vh',
		// width: '100vw'
	} 
  return (
    <div className={cssModules.slide} style={styles}>
      
    </div>
  )
}
