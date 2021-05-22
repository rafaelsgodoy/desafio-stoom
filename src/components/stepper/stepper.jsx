import React from 'react';
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TamanhosStep from './tamanho-step';
import MassaStep from './massa-step';
import SaborStep from './sabor-step';
import { useDispatch, useSelector } from 'react-redux';
import { finishOrderInProgress } from '../../store/slices/orderSlice';
import { Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    boxShadow: 'none',
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Selecione um tamanho', 'Selecione a massa', 'Escolha um sabor'];
}

export default function StepperComponent() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const history = useHistory();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.orderInProgress)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSet = (index) => {
    setActiveStep(index);
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleFinish = () => {
    setActiveStep(0);
    dispatch(finishOrderInProgress());
    history.push('/cart');
  }

  const getContent = (index) => {
    switch (index) {
      case 0:
        return <TamanhosStep setActiveStep={() => setActiveStep(index + 1)} />
      case 1:
        return <MassaStep setActiveStep={() => setActiveStep(index + 1)} />
      case 2:
        return <SaborStep setActiveStep={() => setActiveStep(index)} />
      default:
        break;
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} style={{ margin: 0, padding: 20 }} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel onClick={() => {
              handleSet(index);
            }}>{label}</StepLabel>
            <StepContent>
              {getContent(index)}
              <div className={classes.actionsContainer}>
                <Box display="flex">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    fullWidth

                  >
                    VOLTAR
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={(!order.sabor || !order.tamanho || !order.massa) && activeStep === steps.length - 1}
                    onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'FINALIZAR' : 'PRÓXIMO'}
                  </Button>
                </Box>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
