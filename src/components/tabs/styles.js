import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTab-root ': {
      backgroundColor: theme.palette.primary.light,
      borderRadius: 30,
      marginLeft: 10,
      marginRight: 10,
      color: theme.palette.primary.contrastText
    },
    '& .Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }
  },
}));