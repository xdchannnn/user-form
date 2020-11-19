import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/AppBar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        height: "128px",
        borderRadius: '10px',
        background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        padding: '24px 27px 24px 30px',
        
    },
    flex: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start',
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
        fontWeight: 600,
        fontSize: '30px',
        lineHeight: '40.85px',
        color: 'white',
        marginLeft: '-14px',
    },
})

export default function UserNameBlock() {
    const classes = useStyles();
    const [name, setName] = useState("Биохакер Ментор Программист")

    return(
        <Card position="relative" className={`${classes.card} ${classes.flex}`}>
            <CardContent className={classes.flex}>
                <Paper
                elevation="0"
                    style={{
                        color: 'white',
                        height: '60px',
                        width: '60px',  
                        borderRadius: '50%',
                        transform: 'translate(-18%)',
                        marginRight: '42px',
                    }}
                >
                    <AccountCircleIcon 
                        style={{
                            color: 'purple',
                            height: '80px',
                            width: '80px',  
                            transform: 'translate(-15%, -15%)',
                        }}
                    /> 
                </Paper>               
                <Typography className={classes.text}>{name}</Typography>
            </CardContent>
            
            <CardActions>
                <Button className={classes.button}>Редактировать</Button>
            </CardActions>
        </Card>
    );
}