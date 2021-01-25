// @flow
import {
    AppBar, Button, Toolbar, IconButton, Menu
    ,MenuItem} from '@material-ui/core';
import * as React from 'react';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

export class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open:false
            

        }
    }

    
   handleChange = (event) => {
    // setAuth(event.target.checked);
  };

   handleMenu = (event) => {
       this.setState({
           anchorEl: event.currentTarget,
           open:true,
 })
   };

   handleClose = () => {
       this.setState({
           anchorEl: null,
           open:false
    })
  };
    render() {
        const { auth,handleAuth} = this.props;
        const { open ,anchorEl} = this.state;
        return (
      <React.Fragment>
            <AppBar position="stati c">
                <Toolbar>

                <IconButton edge="start"  color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
    
                    {auth ? <div>
                        <IconButton
                        aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit">
                            <AccountCircle></AccountCircle>                            
                        </IconButton>
                        <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                
                <MenuItem onClick={handleAuth}>Log out</MenuItem>
              </Menu>
                    </div> : (<Button color="inherit" onClick={handleAuth}>Login</Button>)}
                </Toolbar>
            </AppBar>
      </React.Fragment>
    );
  };
};