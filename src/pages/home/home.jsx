import { Box, Typography } from '@material-ui/core';
import Header from "../../components/header/header";
import StepperComponent from '../../components/stepper/stepper';
import TabsComponent from '../../components/tabs/tabs';

import HotSelleing from '../../components/hotSelling/hotSelling';

const Home = () => {

  return <>
    <Header />
    <Box height={60} width={1}></Box>
    <Box p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box style={{ minWidth: 400, width: '100%', maxWidth: 900 }} >
        <Box mb={2} width={1}>
          <Typography align="left" variant="h5">Pizza do Dia</Typography>
        </Box>
        <HotSelleing />
        <TabsComponent />
        <Box width={1}>
          <StepperComponent />
        </Box>
      </Box>
    </Box>
  </>

}
export default Home;