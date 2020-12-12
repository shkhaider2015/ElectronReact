import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Application from "../printable/ApplicationForm";
import Confirmation from "../printable/ConfirmationLatter";
import Nomination from "../printable/Nomine";
import Possession from "../printable/PossessionCertificate";
import TermsAndCond from "../printable/TermsAndCondtition";
import SitePlan from "../printable/sitePlan";
import Allotment from "../printable/AlotmentOrder";



const ApplicationDialog = ({ setDialogue, formNumber, clicked, users  }) =>
{
  const [open, setOpen] = React.useState(true)
  // const [personal, setPersonal] = React.useState({})
  // const [plot, setPlot] = React.useState({})
  // const [payment, setPayment] = React.useState({})
  const [user, setUser] = React.useState([])

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
        { getForm(formNumber) }
      </Dialog>
    </div>
  );
}

export default ApplicationDialog