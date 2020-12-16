import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import { AccountCircle, HomeWorkOutlined, MonetizationOn, Home } from "@material-ui/icons";
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import PersonalInfo from "./forms/personalInfo";
import PlotInfo from "./forms/plotInformation";
import PaymentInfo from "./forms/paymentInfo";
import { MyProgress } from "../components/circulerProgress";
import { db, storage, firebase } from "../config/firebase";
import { AuthContext } from "../context/authContext";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@material-ui/core';




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
    1: <AccountCircle />,
    2: <HomeWorkOutlined />,
    3: <MonetizationOn />,
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
    height: '80mvh',
    overflowX: 'hidden'
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
  },
  homeIcon: {
    width: '50px',
    height: '50px',


  }
}));

function getSteps() {
  return ['Client Information', 'Client Assets Information', 'Client Payment Information'];
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

const getForms = (step, personalModel, plotModel, paymentModel) => {
  switch (step) {
    case 0:
      return <PersonalInfo model={personalModel} />;
    case 1:
      return <PlotInfo model={plotModel} />;
    case 2:
      return <PaymentInfo model={paymentModel} />;
    default:
      return 'Unknown step';
  }

}

const Application = () => {
  const classes = useStyles();
 const navigate = useNavigate()

  const [activeStep, setActiveStep] = React.useState(0);
  const [proceed, setProceed] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true)
  const [isSucceed, setIsSucceed] = React.useState(false)
  const steps = getSteps();
  const currentUser = React.useContext(AuthContext);
  const [selectedImage, setSelectedImage] = React.useState(null)

  const [imageFile, setImageFile] = React.useState(null)
  const [imageURI, setImageURI] = React.useState(null)
  const [name, setName] = React.useState("")
  const [fatherName, setFatherName] = React.useState("")
  const [cellPhone, setCellPhone] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [cNIC, setCNIC] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [transfor, setTransfor] = React.useState(false)

  const [area, setArea] = React.useState("")
  const [measurement, setMeasurement] = React.useState(0)
  const [square, setSquare] = React.useState(0)
  const [block, setBlock] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [nature, setNature] = React.useState("")
  const [type, setType] = React.useState("")
  const [sitePlane, setSitePlane] = React.useState("")
  const [purpose, setPurpose] = React.useState("")

  const [amount, setAmount] = React.useState(0)
  const [procedure, setProcedure] = React.useState("")
  const [totalInstallment, setTotalInstallment] = React.useState(0)
  const [duration, setDuration] = React.useState("")
  const [installment, setInstallment] = React.useState(0)
  const [balance, setBalance] = React.useState(0)
  const [givenAmount, setGivenAmount] = React.useState(0)
  const [paymentMethod, setPaymentMethod] = React.useState("")
  const [open, setOpen] = React.useState(true)
  const [disableInstallment, setDisableInstallment] = React.useState(true)


  const personal = {
    id: "",
    imageURI: imageURI,
    name: name,
    fatherName : fatherName,
    email: email,
    cellPhone: cellPhone,
    phone: phone,
    cnic: cNIC,
    address: address,
    transfor: transfor
  }
  const asset = {
    plotName: area,
    measurement: measurement,
    square: square,
    block: block,
    category: category,
    nature: nature,
    type: type,
    sitePlane: sitePlane,
    purpose: purpose
  }
  const payment = {
    totalAmount: amount,
    givenAmount: givenAmount,
    procedure: procedure,
    installment: totalInstallment,
    installmentDuration: duration,
    firstInstallment: installment,
    balance: balance,
    paymentMethod: paymentMethod
  }

  React.useEffect(
    () => {
      const uploadData = async (x, y, z ) => {

        const number = x.cnic.replace(/-/g, "")
        let data = {}
        data[number] = [x, y, z] 
        await db.collection("clients")
        .doc(currentUser.currentUser.displayName.replace(/\s/g, "") +currentUser.currentUser.email.slice(0,3) )
        .set(data, {merge : true})
          .then((docRef) => {
            console.log("Docement written with ID : ", docRef)
            setIsLoading(false)
            setIsSucceed(true)

          })
          .catch((error) => {
            console.error("erro adding document : ", error)
            setIsLoading(false)
            setIsSucceed(false)
          })
      }

      if (imageURI) {
        console.log("Image Upload Succesfully")
        uploadData(personal, asset, payment)
      }
    },
    [imageURI]
  )

  const personalModel =
  {
    imageFile,
    setImageFile,
    selectedImage,
    setSelectedImage,
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
    block,
    setBlock,
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

  const paymentModel = {
    amount,
    setAmount,
    givenAmount,
    setGivenAmount,
    procedure,
    setProcedure,
    totalInstallment,
    setTotalInstallment,
    duration,
    setDuration,
    installment,
    setInstallment,
    balance,
    setBalance,
    paymentMethod,
    setPaymentMethod,
    open,
    setOpen,
    setProceed,
    disableInstallment,
    setDisableInstallment
  }

  const handlePersonalForm = () => {
    let val = false;
    // imageFile === null || 
    name === "" || fatherName === ""
      || cellPhone === "" || cNIC === "" || email === ""
      || address === "" || cellPhone.length < 11 || cNIC.length < 15
      ? val = false
      : val = true

    return val;
  }
  const handlePlotForm = () => {
    let val = false;
    area === "" || measurement === "" || square === ""
      || category === "" || nature === "" || type === ""
      || sitePlane === "" || purpose === ""
      ? val = false
      : val = true

    return val;
  }
  const handlePaymentForm = () => {
    let val = false;

    if (procedure === "") {
      val = false;
    }
    else if (procedure === "Installment") {
      duration === "" || paymentMethod === ""
        || amount === 0 || totalInstallment === 0 || installment === 0
        || balance === 0
        ? val = false
        : val = true
    }
    else
    {
       paymentMethod === "" || amount === 0 || balance === 0
      ? val = false
      : val = true
    }

    return val
  }

  const uploadImage = () => {

    var storageRef = storage.ref().child(cNIC.replace(/-/g, ""));
    var uploadTask = storageRef.child('profile.jpg').put(imageFile);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
        default:
          console.log("Default case")
          break;
      }
    }, (error) => {
      // Handle unsuccessful uploads
      console.log(error)
      setIsLoading(false)
    }, () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        setImageURI(downloadURL)
      });
    });


  }

  const handleNext = () => {

    switch (activeStep) {
      case 0:
        if (handlePersonalForm()) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
        break;
      case 1:
        if (handlePlotForm()) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
        break;
      case 2:
        //
        if (handlePaymentForm()) {
          console.log("Handle Payment Form")
          if (proceed) {
            console.log("Proceed True")
            uploadImage()
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
          }
          {
            console.log("Proceed False")
            setOpen(false)
          }

        }
        else {
          console.log("")
        }
        break;
      case 3:
        //
        console.log("Ste is 3")
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

  const Progress = (<MyProgress isLoading={isLoading} reset={handleReset} succeed={isSucceed} />)

  return (
    <div className={classes.root}>
      <div className="row " >
        <div className="col-1 justify-content-center text-center" >
            <IconButton
            color="inherit"
            aria-haspopup="true"
            style={{ marginTop : '20%' }}
            onClick={() => navigate(-1)}
            >
            <Home color="primary" className={classes.homeIcon} />
            </IconButton>
        </div>
        <div className="col-11" >
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} className={classes.stepper} >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>


      <div className="row" >

        <div className="col-1" >

        </div>

        <div className="col-11" >
          {activeStep === steps.length ? Progress
            // (
            //   <div style={{ width: '100%', textAlign: 'center' }} >
            //     <Typography className={classes.instructions}>
            //       All steps completed - you&apos;re finished
            //     </Typography>
            //     <Button onClick={handleReset} className={classes.button}>
            //       Reset
            //     </Button>
            //   </div>
            // ) 
            : (
              <div style={{ width: '100%', textAlign: 'center' }} >
                {getForms(activeStep, personalModel, plotModel, paymentModel)}
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

    </div>
  );
}

export default Application;