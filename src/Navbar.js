import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({

  });

export default function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar disableGutters="true">
            <Box flexGrow={1} />
              <NotificationsNoneIcon 
                style={{
                    color: 'white',
                    height: '29.25px',
                    width: '24px',
                }}
              />
              <Divider orientation="vertical"  variant="middle" 
                style={{
                    borderRight: '1px solid white',
                    width: '0',
                    height: '39px',
                }}
              />
              <AccountCircleIcon 
                style={{
                    color: 'purple',
                    height: '40px',
                    width: '40px',
                }}
              />
          </Toolbar>
        </AppBar>     
    )
}