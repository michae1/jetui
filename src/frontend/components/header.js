import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import React, {Component} from 'react';
import { connect } from 'react-redux';

import {
blue300,
indigo900,
orange200,
deepOrange300,
pink400,
purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5}


export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => {
    console.log("handleToggle")  
    setTimeout(() => this.setState({open: !this.state.open}), 300)
  };

  getAvatar() {
    if (this.props.authenticated)
      return <Avatar
          color={deepOrange300}
          backgroundColor={indigo900}
          size={30}
          style={style}
        >
          A
        </Avatar>;
    else 
      return <Avatar
          size={30}
          style={style}
        >
          ?
        </Avatar>;    
  }

  getMenu() {
    if (this.props.authenticated)
      return <div>
            <MenuItem primaryText="Flights" linkButton={true} href="#" onClick={this.handleToggle} />
            <MenuItem primaryText="SignOut"  linkButton={true} href="#signout" onClick={this.handleToggle} />
          </div>;
    else
      return <div>
            <MenuItem primaryText="Flights" linkButton={true} href="#" onClick={this.handleToggle} />
            <MenuItem primaryText="SignIn"  linkButton={true} href="#signin" onClick={this.handleToggle} />
            <MenuItem primaryText="SignUp"  linkButton={true} href="#signup" onClick={this.handleToggle} />
          </div>;

  }

  render() {
    return (
      <div>
        <AppBar
          title="Jet UI"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={this.getAvatar()}
        />
        <Drawer 
          open={this.state.open} 
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          {this.getMenu()}
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);