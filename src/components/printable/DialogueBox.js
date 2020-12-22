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
  const [user, setUser] = React.useState([])
  const componentRef = useRef();

const getUser = () => {
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
        <div>
        { getForm(formNumber) }
        </div>
      </Dialog>
    </div>
  );
}

export default ApplicationDialog