import React, { Component } from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import miu_svg from '../assets/miu.svg'
import cssModules from './navbar.module.css'


export default class Navbar extends Component {
  state = {}

  onClickHandler = (e, item) => {
    console.log(item)
    this.setState({activeItem: item.name})
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Segment style={{minHeight: '700px'}} inverted>
        <Menu inverted pointing secondary>
          <Menu.Item 
            active={activeItem === 'home'} 
            name='home' 
            onClick={this.onClickHandler} 
          />
          <Menu.Item 
            active={activeItem === 'about'} 
            name='about' 
            onClick={this.onClickHandler} 
          />
          <Menu.Item 
            active={activeItem === 'Registerd Groups'} 
            name='Registerd Groups' 
            onClick={this.onClickHandler} 
          />

          <Menu.Item as='a'>
            <img alt='logo' src={miu_svg} />
          </Menu.Item>

          <Menu.Item position='right'>
            <Button className={cssModules.button} primary>Sign up</Button>
            <Button>Log-in</Button>
          </Menu.Item>
        </Menu>
      </Segment>
      
    )
  }
}
