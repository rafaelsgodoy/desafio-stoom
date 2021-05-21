import { Box, Divider, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderInProgress } from '../../store/slices/orderSlice';
import { isItemInOrderProgress } from '../../utils';

import Card from '../card/card';

const MassaStep = ({setActiveStep}) => {
  const massas = useSelector((state) => state.items.massas);
  const orderInProgress = useSelector((state) => state.order.orderInProgress);
  const dispatch = useDispatch();

  const handleClick = (massa) => {
    const order = {
      ...orderInProgress,
      massa: massa
    }
    setActiveStep()
    dispatch(setOrderInProgress(order));
  }
  return (
    <Box p={2}>
      {massas &&
        massas.map(el => (
          <Box key={el.id} mb={1}>
            <Card title={el.name} handleClick={() => handleClick(el)} isActive={isItemInOrderProgress(el, orderInProgress, 'massa')}>
              <Typography>{el.name}</Typography>
              <Typography variant="caption">{el.description}</Typography>
            </Card>
            <Divider />
          </Box>

        ))
      }
    </Box>
  );
}
export default MassaStep;