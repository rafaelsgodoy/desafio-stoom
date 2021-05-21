import { Box, Divider, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderInProgress } from '../../store/slices/orderSlice';
import { isItemInOrderProgress } from '../../utils';

import Card from '../card/card';

const TamanhoStep = ({setActiveStep}) => {
  const dispatch = useDispatch();
  const tamanhos = useSelector((state) => state.items.tamanhos_pizzas);
  const orderInProgress = useSelector((state) => state.order.orderInProgress);

  const handleClick = (tamanho) => {
    const order = {
      ...orderInProgress,
      tamanho: tamanho
    }
    setActiveStep()
    dispatch(setOrderInProgress(order));
  }


  return (
    <Box p={2}>
      {tamanhos &&
        tamanhos.map(el => (
          <Box key={el.id} mb={1}>
            <Card title={el.name} handleClick={() => handleClick(el)} isActive={isItemInOrderProgress(el, orderInProgress, 'tamanho')}>
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
export default TamanhoStep;