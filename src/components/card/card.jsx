import { Card as CardM, CardMedia, CardContent, Box, Fab, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Card = ({ title, image, children, isActive, hot, handleClick }) => {
  const classes = useStyles();
  return (
    <CardM className={classes.root}>
      {
        hot?.hot && <Box position="absolute" display="flex" flexDirection="column" className={classes.badges}>
          <Typography variant="h5">
            <b>{hot.points}</b>
          </Typography>
          <Typography variant="caption" gutterBottom>
            pontos
          </Typography>
        </Box>
      }
      {image && <CardMedia
        style={{ height: 160, width: '100%' }}
        image={image}
        title={title}
      />}
      <CardContent>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box width="80%">

            {children}

          </Box>
          <Fab
            onClick={handleClick}
            className={`${classes.fabButton} ${isActive && 'active'}`} color="inherit" aria-label="add">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>
          </Fab>
        </Box>
      </CardContent>
    </CardM>
  )
}
export default Card;