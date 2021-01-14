import React, { useRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Application from "../printableForm/ApplicationForm"
import Confirmation from "../printableForm/CONFIRMATION LETTER ";
import Possession from "../printableForm/PossessionCertificate";
import TermsAndCond from "../printableForm/TermsAndCondtition";
import SitePlan from "../printableForm/sitePlan";
import Allotment from "../printableForm/AlotmentOrder";
import TransferForm from '../printableForm/TransferForm';
import PlotAndPaymentInformationForm from '../printableForm/PlotPaymentInformationForm';



const ApplicationDialog = ({ setDialogue, formNumber, clicked, users }) => {
  const open = true
  const [user, setUser] = React.useState([])

  const getUser = () => {
    users.map(
      (object, index) => (
        clicked === index
          ? setUser(object)
          : null
      )
    )
  }

  const getForm = (x) => {
    switch (x) {
      case 1:
        return <Application obj={user} formNumber={x} print={false} />
      case 2:
        return <Application obj={user} formNumber={x} print={false} />
      case 3:
        return <Confirmation obj={user} print={false} />
      case 4:
        return <SitePlan obj={user} print={false} />
      case 5:
        return <TermsAndCond obj={user} print={false} />
      case 6:
        return <Possession obj={user} print={false} />
      case 7:
        return <Allotment obj={user} print={false} />
      case 8:
        return <TransferForm obj={user} print={false} />
      case 9:
        return <PlotAndPaymentInformationForm obj={user} print={false} />
      default:
        return <Application obj={user} />

    }
  }

  const handleClose = () => {
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
          {getForm(formNumber)}
        </div>
      </Dialog>
    </div>
  );
}

export default ApplicationDialog