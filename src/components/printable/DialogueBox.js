import React, { useRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Application from "../printableForm/ApplicationForm"
import Confirmation from "../printableForm/CONFIRMATION LETTER ";
import Possession from "../printableForm/PossessionCertificate";
import TermsAndCond from "../printableForm/TermsAndCondtition";
import SitePlan from "../printableForm/sitePlan";
import Allotment from "../printableForm/AlotmentOrder";
import ReactToPrint from "react-to-print";



const ApplicationDialog = ({ setDialogue, formNumber, clicked, users  }) =>
{
  const [open, setOpen] = React.useState(true)
  // const [personal, setPersonal] = React.useState({})
  // const [plot, setPlot] = React.useState({})
  // const [payment, setPayment] = React.useState({})
  const [user, setUser] = React.useState([])
  const componentRef = useRef();

const getUser = () => {
  // console.log(`getUser : clicked = ${clicked} and users = ${users} `)
    users.map(
      (object, index) => (
        clicked === index
        ? setUser(object)
        : null
      )
    )
}

  const getForm = (x) => 
{
    switch(x)
    {
        case 1:
            return <Application obj={user} formNumber={x} />
        case 2:
            return <Application obj={user} formNumber={x}  />
        case 3:
            return <Confirmation obj={user}  />
        case 4:
            return <SitePlan obj={user}  />
        case 5:
            return <TermsAndCond obj={user} />
        case 6:
            return <Possession obj={user}  />
        case 7:
            return <Allotment obj={user}  />
        default:
            return <Application obj={user}  />

    }
}

  const handleClose = () => {    
    //   setOpen(false)
      setDialogue(false)
  };

  React.useEffect(
    () => {
      getUser()
    },
    []
  )



  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Once Data upload then you cannot change"}</DialogTitle>
        <DialogContent style={{ border : '1px solid black' }} >
          <DialogContentText id="alert-dialog-description">
            Do you agree to proceed to the next step
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOpen} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions> */}
        <div>
        { getForm(formNumber) }
        </div>
        

       
      </Dialog>
    </div>
  );
}

export default ApplicationDialog