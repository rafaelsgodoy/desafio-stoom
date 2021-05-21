import { useHistory } from 'react-router-dom'

import { Box, Button } from "@material-ui/core";

const TabsComponent = () => {
  const history = useHistory();
  return (
    <Box width={1} display="flex">
      <Box width={1 / 2} p={1}>
        <Button
          onClick={() => {
          }} variant="contained" disableElevation color="primary" fullWidth size="large">Monte o seu</Button>
      </Box>
      <Box width={1 / 2} p={1}>
        <Button
          onClick={() => {
            history.push("/cart")
          }}
          disableElevation color="primary" fullWidth size="large">Carrinho</Button>
      </Box>

    </Box>
  )
}
export default TabsComponent;