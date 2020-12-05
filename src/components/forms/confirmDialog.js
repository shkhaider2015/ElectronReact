import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = ({ setProceed, open, setOpen }) =>
{
  

  const handleClickOpen = () => {
    setProceed(false);
    setOpen(true)
  };

  const handleClose = () => {
    setProceed(true);
    setOpen(true)
  };

  return (
    <div>
      <Dialog
        open={!open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Once Data upload then you cannot change"}</DialogTitle>
        <DialogContent>
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
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog