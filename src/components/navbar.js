import React, { Component } from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import miu_svg from '../assets/miu.svg'


export default class Navbar extends Component {
  state = {}

  onClickHandler = (e, item) => {
    console.log(item)
    this.setState({activeItem: item.name})
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Segment id='segment' style={{minHeight: '40px'}} inverted>
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
          {/* FIXME: logo is not in the perfect middle */}
          <Menu.Item style={{paddingBottom: 0, position: 'absolute', left:'47%'}} as='a'>
            <img alt='logo' weight='40px' src={miu_svg} />
          </Menu.Item>

          <Menu.Item position='right'>
            <Button style={{marginRight: '10px'}} primary>Sign up</Button>
            <Button>Log-in</Button>
          </Menu.Item>
        </Menu>
      </Segment>
      
    )
  }
}
