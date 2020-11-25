import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/AppBar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';


import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        height: "192px",
        borderRadius: '10px',
        background: '#ffffff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        padding: '24px 0px 24px 0px',
        marginTop: '24px'
    },
    cardContent: {
        width: '100%',
        padding: 0,
        "&:last-child": {
            padding: 0,
        },
    },
    flex: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: 'center',
    },
    button: {
        color: "#fff",
        fontWeight: 600,
        style: 'normal',
        fontSize: '14px',
        lineHeight: '19.07px',
        marginTop: '5px',
    },
    text: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '30px',
        color: 'black',
        padding: "33px 77px 33px 77px",
        display: "flex",
        "& > *": {
            margin: '0 45px 0 0',
        },
    },
    divider: {
      width: "100%",
    },
})

export default function userInfoBlock(props) {
    const classes = useStyles();
    
    return (
    <Card position="relative" className={`${classes.card} ${classes.flex}`}>
        <CardContent className={`${classes.flex} ${classes.cardContent}`}>         
            <Typography className={classes.text}>
                <AlternateEmailIcon style={{ fill: '#00BFA5', fontSize: "30px", }}/>
                {props.info[1]}
            </Typography>               
            <Divider className={classes.divider} />            
            <Typography className={classes.text}>
                <PhoneIcon style={{ fill: '#00BFA5', fontSize: "30px", }}/>
                {props.info[2]}
            </Typography>
        </CardContent>
    </Card>
    );
}