import { Box, Button, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { finishCart, removeOrderBydId } from "../../../store/slices/orderSlice";

const ListCart = ({ cart }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let totalPrice = 0;

  const getTotal = () => {
    cart.forEach((a, b) => {
      totalPrice += parseFloat(a.order.sabor.price.replace(',', '.'))
    })
    return totalPrice;
  }

  const removeOrder = (id) => {
    dispatch(removeOrderBydId(id))
  }

  const clearCart = () => {
    dispatch(finishCart());
  }
  return (
    <>
      {
        cart.length > 0 && (
          <Box width={1}>

            <Box p={2}>
              <Typography variant="h6">
                Cart
            </Typography>
              <Typography variant="caption">
                Total: R$ {getTotal().toFixed(2)}
              </Typography>
            </Box>

            <List>
              {
                cart && cart.map((el, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`${el.order.sabor.name} - ${el.order.tamanho.name}`}
                      secondary={`${el.order.massa.name} - R$ ${el.order.sabor.price}`}
                    />
                    {
                      el.order.sabor.hot && (
                        <ListItemText
                          secondary={`você ganha ${el.order.sabor.points} pontos`}
                        />
                      )
                    }

                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={() => removeOrder(el.id)}
                        edge="end" aria-label="delete">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              }

            </List>
            <Box display="flex" justifyContent="flex-end" p={1} mt={4}>
              <Box width={1 / 2}>
                <Button
                  onClick={() => {
                    history.goBack();
                  }}
                  disableElevation color="primary" fullWidth size="large">Voltar</Button>
              </Box>
              <Box width={1 / 2}>
                <Button
                  onClick={clearCart}
                  variant="contained" disableElevation color="primary" fullWidth size="large">Finalizar</Button>
              </Box>
            </Box>
          </Box>
        )
      }
    </>
  )
}

export default ListCart;