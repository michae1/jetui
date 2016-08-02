import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import React, {Component} from 'react';

const Header = () => (
  <AppBar
    title="Flight jet search"
    iconStyleLeft={null}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Hotels"  linkButton={true} href="#hotels" />
        <MenuItem primaryText="Flights"  linkButton={true} href="#" />
        <MenuItem primaryText="SignIn"  linkButton={true} href="#signin" />
        <MenuItem primaryText="SignUp"  linkButton={true} href="#signup" />
      </IconMenu>
    }
  />
);


export default Header;