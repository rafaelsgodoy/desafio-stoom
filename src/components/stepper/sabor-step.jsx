import { Box, Divider, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderInProgress } from '../../store/slices/orderSlice';
import { isItemInOrderProgress } from '../../utils';

import Card from '../card/card';

const SaborStep = ({ setActiveStep }) => {
  const sabores = useSelector((state) => state.items.sabores);
  const orderInProgress = useSelector((state) => state.order.orderInProgress);
  const dispatch = useDispatch();
  console.log("orderInProgress", orderInProgress);

  const handleClick = (sabor) => {
    const order = {
      ...orderInProgress,
      sabor: sabor
    }
    setActiveStep()
    dispatch(setOrderInProgress(order));
  }

  return (
    <Box p={2}>
      {sabores &&
        sabores.map(el => (
          <Box key={el.id} mb={1}>
            <Card title={el.name}
              hot={{ points: el.points, hot: el.hot }}
              image={el.image} handleClick={() => handleClick(el)} isActive={isItemInOrderProgress(el, orderInProgress, 'sabor')}>
              <Typography>{el.name}</Typography>
              <Typography variant="caption">{el.description}</Typography>
              <Typography variant="caption">{el.ingredients}</Typography>
              <Typography variant="h6">{el.price}</Typography>

            </Card>
            <Divider />
          </Box>

        ))
      }
    </Box>
  );
}
export default SaborStep;