import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../src/Navbar';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

import "typeface-open-sans";

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

export default function About() {
  const classes = useStyles();

  return (
    <Container maxWidth="false" disableGutters={true}>
      <Navbar />  

      <Box>
        <Typography classes={{root: classes.typography}} component="h1" gutterBottom="true">
          ЛИЧНЫЙ ПРОФИЛЬ
        </Typography>

        

        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <Copyright />
      </Box>
    </Container>
  );
}