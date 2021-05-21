import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 180,
    width:'100%',
    backgroundColor:'#f50057',
    margin:0,
    padding:0,
    position: 'fixed'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));