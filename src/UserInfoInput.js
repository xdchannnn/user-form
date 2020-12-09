import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/AppBar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        height: "192px",
        borderRadius: '10px',
        background: '#ffffff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        padding: '24px 0px 24px 0px',
        marginTop: '24px'
    },
    cardContentInput: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    flex: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        fill: '#00BFA5',
        fontSize: '30px',
        marginRight: '3.5%',
    },
    divider: {
        backgroundColor: '#CAE7FE',
    },
    gridItem: {
        display: 'flex',
        alignItems: 'center',
    },
    textField: {
       width: '100%',
    },
    button: {
        borderRadius: '36px',
        backgroundColor: '#01BDA7',
        color: 'white',
        '&:hover': {
            backgroundColor: '#00aa96',
        }
    },
    
})

export default function userInfoInput(props) {
    const classes = useStyles();
    const info = props.info;
    const setInfo = props.setInfo;
    
    return (
    <Card position="relative" className={`${classes.card} ${classes.flex}`}>
        <CardContent className={classes.cardContentInput}>    
            
            <Grid container alignItems="center" justify="space-around">
              
                    <Grid item className={classes.gridItem} xs={3}>
                        <AssignmentIndIcon className={classes.icon} />
                        <TextField 
                        variant='outlined' 
                        label="Фамилия и имя" 
                        placeholder="Укажите ваши фамилию и имя" 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.textField}
                        value={info[0]}
                        />
                    </Grid>
               

               
                    <Divider orientation="vertical" className={classes.divider} flexItem="true" /> 
                
                
                    <Grid item className={classes.gridItem} xs={3}>
                        <AlternateEmailIcon className={classes.icon}/>
                        <TextField 
                            variant='outlined' 
                            label="E-mail" 
                            placeholder="Укажите e-mail" 
                            InputLabelProps={{
                            shrink: true,
                            }}
                            className={classes.textField}
                        />
                    </Grid>
                

                
                    <Divider orientation="vertical" className={classes.divider} flexItem="true" /> 
                
                           
                    <Grid item className={classes.gridItem} xs={3}>
                        <PhoneIcon className={classes.icon} />
                        <TextField 
                            variant='outlined' 
                            label="Номер телефона" 
                            placeholder="Укажите номер телефона" 
                            InputLabelProps={{
                            shrink: true,
                            }}
                            className={classes.textField}
                        />
                    </Grid>
                
            </Grid>
        </CardContent>
        <CardActions>
            <Button variant="contained" className={classes.button}>Сохранить изменения</Button>
        </CardActions>
    </Card>
    );
}