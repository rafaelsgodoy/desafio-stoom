import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderInProgress } from "../../store/slices/orderSlice";
import { isItemInOrderProgress } from "../../utils";
import Card from '../card/card';

const HotSelleing = () => {
  const pizzas = useSelector((state) => state.items.sabores);
  const [hotselling, setHotselling] = useState([]);
  const orderInProgress = useSelector((state) => state.order.orderInProgress);
  const dispatch = useDispatch();

  useEffect(() => {
    setHotselling(pizzas.find(el => el.hot === true));
  }, [pizzas]);

  const handleClick = (sabor) => {
    const order = {
      ...orderInProgress,
      sabor: sabor
    }
    dispatch(setOrderInProgress(order));
  }
  return (

    <>
      {
        hotselling && <Card
          hot={{ points: hotselling.points, hot: hotselling.hot }}
          image={hotselling.image}
          handleClick={() => handleClick(hotselling)} isActive={isItemInOrderProgress(hotselling, orderInProgress, 'sabor')}>
          <Typography variant="h6">{hotselling.name}</Typography>
          <Typography variant="caption">{hotselling.ingredients}</Typography>
          <Typography variant="h6">{hotselling.price}</Typography>
        </Card>
      }
    </>
  )
}
export default HotSelleing;