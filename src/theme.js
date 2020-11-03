import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import imageUrl, { ReactComponent as Image }  from '../assets/background.svg';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
      gay: '#fff',
    },
    error: {
      main: red.A400,
    }, 
  },
  overrides: {
    MuiCssBaseline: {
        "@global": {
            body: {
                backgroundImage: `url(${imageUrl})`,
                backgroundRepeat: 'no-repeat',
                marginLeft: '34px',
                marginRight: '23px',
            }
        }
    }
}
});

export default theme;
