import React, { useContext } from 'react';

import { AppContext } from 'context/appContext';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function AppDialog() {
  const appContext = useContext(AppContext);

  const { title, content, contentBlock, onOk, onClose } = appContext.appDialogContext;

  return (
    <Dialog open={appContext.isAppDialogOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
        {contentBlock}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={onOk} color="primary" variant="outlined">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AppDialog;
