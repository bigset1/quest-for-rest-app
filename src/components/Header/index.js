import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Link from 'react-router/lib/Link';
import FlatButton from 'material-ui/FlatButton';

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
      <Link to="/profile"><FlatButton label="Profile" /></Link>,
      <Link to="/create-quest"><FlatButton label="Create quest" /></Link>,
    ];
    return <div>
      <AppBar title={links} onLeftIconButtonTouchTap={this.toggleMenu}/>
      <Drawer docked={false} width={250}
              open={this.state.open}
              onRequestChange={this.toggleMenu}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    </div>
  }
}

export default Header;
