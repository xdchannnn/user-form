import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles({

  });

export default function Navbar(props) {
    const classes = useStyles();
    const userNameArr = props.name.split(' ');
    const userName = userNameArr[0] + ' ' + userNameArr[1].charAt(0) + '.';

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
              
              <Paper
                elevation="0"
                style={{
                    color: 'white',
                    height: '30px',
                    width: '30px',  
                    borderRadius: '50%',
                }}>
                  <AccountCircleIcon 
                    style={{
                        color: 'purple',
                        height: '40px',
                        width: '40px',  
                        transform: 'translate(-15%, -15%)',
                    }}
                  /> 
              </Paper>
                    <Typography
                      style={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '19.07px',
                        marginLeft: '20px',
                      }}
                    >{userName}</Typography>          
          </Toolbar>
        </AppBar>     
    )
}