import { Box, Typography } from "@material-ui/core";

const EmptyCart = ({ cart }) => {
  return (
    <>
      {
        !cart.length && (
          <Box p={2} m={2}>
            <Typography variant="h5">
              o seu carrinho está vázio
            </Typography>
          </Box>
        )
      }
    </>
  );
}
export default EmptyCart;