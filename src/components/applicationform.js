import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CML from "./forms/confirmationForm";
import PersonalInfo from "./forms/personalInfo";
import PlotInfo from "./forms/plotInformation";
import PaymentInfo from "./forms/paymentInfo";



const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '80mvh'
  },
  stepper: {

  },
  button: {
    marginTop: '1%'
  },
  instructions: {

  },
  buttonLeft: {
    marginRight: '10%',
  },
  buttonRight: {
    marginLeft: '10%'
  }
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Personal Information';
    case 1:
      return 'Plot Information';
    case 2:
      return 'Payment Information';
    default:
      return 'Unknown step';
  }
}

const getForms = (step, personalModel, plotModel) => {
  switch (step) {
    case 0:
      return <PersonalInfo model={personalModel} />;
    case 1:
      return <PlotInfo model={plotModel} />;
    case 2:
      return <PaymentInfo />;
    default:
      return 'Unknown step';
  }

}

const Application = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [stepOne, setStepOne] = React.useState(false)
  const [stepTwo, setStepTwo] = React.useState(false)
  const [stepThree, setStepThree] = React.useState(false)

  const [name, setName] = React.useState("")
  const [fatherName, setFatherName] = React.useState("")
  const [cellPhone, setCellPhone] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [cNIC, setCNIC] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [address, setAddress] = React.useState("")

  const [area, setArea] = React.useState("")
  const [measurement, setMeasurement] = React.useState("")
  const [square, setSquare] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [nature, setNature] = React.useState("")
  const [type, setType] = React.useState("")
  const [sitePlane, setSitePlane] = React.useState("")
  const [purpose, setPurpose] = React.useState("")

  const personalModel =
  {
    name,
    setName,
    fatherName,
    setFatherName,
    cellPhone,
    setCellPhone,
    phone,
    setPhone,
    cNIC,
    setCNIC,
    email,
    setEmail,
    address,
    setAddress
  }

  const plotModel = {
    area,
    setArea,
    measurement,
    setMeasurement,
    square,
    setSquare,
    category,
    setCategory,
    nature,
    setNature,
    type,
    setType,
    sitePlane,
    setSitePlane,
    purpose,
    setPurpose,

  }

  const handlePersonalForm = () => {
    let val = false;
    name === "" || fatherName === "" || cellPhone === "" || phone === "" || cNIC === "" || email === "" || address === ""
      ? val = false
      : val = true

    return val;
  }
  const handlePlotForm = () => {
    let val = false;
    area === "" || measurement === "" || square === "" || category === "" || nature === "" || type === "" || sitePlane === "" || purpose === ""
      ? val = false
      : val = true

    return val;
  }

  const showError = () => 
  {

  }


  const handleNext = () => {

    switch (activeStep) {
      case 0:
        if (handlePersonalForm()) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
        else{
          showError()
        }
        break;
      case 1:
        if (handlePlotForm()) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
        break;
      case 2:
        //
        break;
      case 3:
        //
        break;
      default:
      //
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>

      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} className={classes.stepper} >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div >
        {activeStep === steps.length ? (
          <div style={{ width: '100%', textAlign: 'center' }} >
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
            <div style={{ width: '100%', textAlign: 'center' }} >
              <div> {getForms(activeStep, personalModel, plotModel)} </div>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.buttonLeft}>
                  Back
              </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.buttonRight}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Application;