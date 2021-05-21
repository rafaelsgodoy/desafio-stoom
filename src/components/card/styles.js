import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    position: 'relative'
  },
  fabButton: {
    minWidth: 40,
    minHeight: 40,
    boxShadow: 'none',
    '&.active': {
      backgroundColor: theme.palette.primary.dark,
    }
  },
  badges: {
    padding:10,
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: '50%',
    fontSize:12,
    color: 'white',
    textAlign: 'center',
    right: 20,
    top:10
  }
}));