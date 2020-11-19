import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

import { useRouter } from 'next/router';

const useStyles = makeStyles({
    typography: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '19.07px',
      color: 'white',
    }
  });

export default function BreadcrumbsComponent() {
    const router = useRouter();
    const classes = useStyles();

    return(
        <Breadcrumbs aria-label="breadcrumb" className={classes.typography}>
            <Typography>Главная</Typography>
            <Typography>{router.pathname === "/profile" ? 'Личный профиль' : null}</Typography>
        </Breadcrumbs>
    );
}