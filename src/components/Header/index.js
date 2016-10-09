import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Link from 'react-router/lib/Link';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import {vkAuth} from '../../config';
const style = {height: '50px'};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(open) {
    this.setState({open})
  }

  render() {
    const links = [
      <Link to="/" key="home"><FlatButton label="Home"/></Link>,
      <Link to="/create-quest" key="create"><FlatButton label="Create quest"/></Link>,
    ];
    const avatarComponent = <Link to="/profile">
      <FlatButton label="John Dorian" icon={<Avatar src="http://placekitten.com/50/50" size={30}/>} style={style}/>
    </Link>;

    return <div>
      <AppBar title={links} onLeftIconButtonTouchTap={this.toggleMenu}
              iconElementRight={avatarComponent}/>
      <Drawer docked={false} width={250}
              open={this.state.open}
              onRequestChange={this.toggleMenu}>
        <MenuItem>
          <Link to="/auth/login" key="home">Login</Link>,
        </MenuItem>
      </Drawer>
    </div>
  }
}

export default Header;
