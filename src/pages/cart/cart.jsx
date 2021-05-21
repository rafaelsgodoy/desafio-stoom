import { Box } from "@material-ui/core";
import Header from "../../components/header/header";
import { DeliverySvg } from "../../ui/deliverySvg";
import { grey } from '@material-ui/core/colors'
import { useSelector } from "react-redux";
import EmptyCart from "./components/empty-cart";
import ListCart from "./components/list-cart";

const Cart = () => {
  const cart = useSelector((state) => state.order.order)
  return (
    <>
      <Header />
      <Box height={60} width={1}></Box>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box width={240} height={240} >
          <Box style={{
            width: 240,
            height: 240,
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: grey[200]
          }}>
          </Box>
          <Box position="absolute">
            <DeliverySvg />
          </Box>
        </Box>

        <EmptyCart cart={cart} />
        <ListCart cart={cart} />

      </Box>
    </>
  )
}
export default Cart;