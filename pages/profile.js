import React, { useState } from 'react';

import Head from 'next/head';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../src/Navbar';
import Link from '../src/Link';
import Breadcrumbs from '../src/Breadcrumbs';
import UserNameBlock from '../src/UserNameBlock';
import UserInfoBlock from '../src/UserInfoBlock';
import UserInfoInput from '../src/UserInfoInput';


const useStyles = makeStyles({
  typography: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '25px',
    color: 'white',
  }
});

export default function Profile() {
  const classes = useStyles();
  const [info, setInfo] = useState(["Биохакер Ментор Программист", "foobar@gmail.com", "Укажите номер телефона"]); //State with user info and name
  const [input, inputIsOpen] = useState(false); //State defining if userInfoBlock input is open

  return (
    <div>
      <Head>
        <title>Личный профиль</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Container maxWidth="false" disableGutters={true}>
        <Navbar name={info[0]}/>  

        <Box>
          <Typography classes={{root: classes.typography}} component="h1" gutterBottom="true">
            ЛИЧНЫЙ ПРОФИЛЬ
          </Typography> 
          
          <Breadcrumbs />       
          
          <UserNameBlock name={info[0]} input={input} inputIsOpen={inputIsOpen} />  
          
          {input 
          ?
          <UserInfoBlock info={info} input={input} inputIsOpen={inputIsOpen} />
          :
          <UserInfoInput info={info} setInfo={setInfo} inputIsOpen={inputIsOpen} />
          }
        
        </Box>
      </Container>
    </div>
  );
}
