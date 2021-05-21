import { useSelector } from 'react-redux';

import { Typography } from "@material-ui/core"

const CardPoints = () => {
  const points = useSelector((state) => state.order.points);

  return (
    <Typography align="right" display="block" color="inherit"><b>{points}</b> Pontos</Typography>

  )

}

export default CardPoints