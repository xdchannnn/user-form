import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';


import Link from '../src/Link';
import Copyright from '../src/Copyright';
import theme from '../src/theme';

export default function Index() {
  return (
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Main Page: Work in progress!
            </Typography>
            <Button variant="contained" color="primary" component={Link} naked href="/profile">
             Go to the user page
            </Button>
          </Box>
        </Container>
  );
}
