import { useLocation, useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import IconLogo from '../icon-logo/IconLogo';
import { Box, IconButton, Typography } from '@material-ui/core';
import CardPoints from './card-points';
const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  return (
    <AppBar elevation={0} position="fixed" color="inherit">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          {
            location.pathname !== "/" && <IconButton
              onClick={() => {
                history.goBack()
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
              </svg>
            </IconButton>
          }

          <IconLogo />
        </Box>
        <Button color="inherit">
          <Box>
            <Typography align="right" display="block" variant="caption" color="inherit">StoomPoints</Typography>
            <CardPoints />
          </Box>
        </Button>
      </Toolbar>
    </AppBar>)
}
export default Header;