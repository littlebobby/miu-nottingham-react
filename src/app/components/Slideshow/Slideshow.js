
import React, { Component } from 'react'
import Slide from './Slide/Slide';
import cssModules from './Slideshow.module.scss';
import arrow_left from '../../assets/arrow_left.svg'
import arrow_right from '../../assets/arrow_right.svg'
import { Segment } from 'semantic-ui-react';
 export default class Slideshow extends Component {
	constructor(props) {
    super(props)
     this.state = {
      images: [
        "https://source.unsplash.com/user/erondu/1600x900",
        "https://source.unsplash.com/collection/190727/1600x900",
        "https://source.unsplash.com/daily",
        "https://source.unsplash.com/1600x900/?nature,water"
      ],
      currentIndex: 0,
      translateValue: 0
    }
	}
	componentWillMount() {
		const timeId = setInterval(this.goToNextSlide.bind(this), 7000)
		this.setState({ timeId })
	}
	componentWillUnmount() {
		clearInterval(this.state.timeId)
	}
	goToNextSlide() {
		clearInterval(this.state.timeId)
		const timeId = setInterval(this.goToNextSlide.bind(this), 7000)
		this.setState((prevState) => ({ currentIndex: (prevState.currentIndex + 1) % prevState.images.length, timeId: timeId }))
	}
	goToPrevSlide() {
		clearTimeout(this.state.timeId)
		const timeId = setInterval(this.goToNextSlide.bind(this), 7000)
		this.setState((prevState) => {
			if(prevState.currentIndex === 0) {
				return ({ currentIndex: prevState.images.length - 1})
			}
			return ({ currentIndex: ((prevState.currentIndex - 1) % prevState.images.length), timeId: timeId }) 
		})
		
	}
 	handleDotClicked = (index) => {
		clearInterval(this.state.timeId)
		const timeId = setInterval(this.goToNextSlide.bind(this), 7000)
		this.setState({currentIndex: index, timeId: timeId})
	}
  
    render() {
			console.log(this.state.currentIndex);
    return (
      <div className={cssModules.slideshow}>
				<img alt='left arrow' className={cssModules.prev} src={arrow_left} onClick={this.goToPrevSlide.bind(this)}></img>
				<Slide image={this.state.images[Math.abs(this.state.currentIndex)]} />
				<img alt='right arrow' className={cssModules.next} src={arrow_right} onClick={this.goToNextSlide.bind(this)}></img>
				
        <div className={cssModules.dotbox} >
					{this.state.images.map((a, i) => 
						<div 
							onClick={() => this.handleDotClicked(i)}
							key={a} 
              className={ `${i === Math.abs(this.state.currentIndex) ? cssModules.active : ''} ${cssModules.dot}` }></div>)}
        </div>
      </div>
    )
  }
}