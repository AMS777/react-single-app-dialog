import React, { useContext, useState } from 'react';

import { AppContextNoReRender } from 'context/appContextNoReRender';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function AppDialogNoContextReRender() {
  const appContext = useContext(AppContextNoReRender);
  const [isAppDialogOpen, setIsAppDialogOpen] = useState(false);
  const [appDialogData, setAppDialogData] = useState({});

  appContext.isOpen = isAppDialogOpen;
  appContext.openAppDialog = appDialogData => {
    setAppDialogData(appDialogData);
    setIsAppDialogOpen(true);
  };
  appContext.closeAppDialog = () => setIsAppDialogOpen(false);
  appContext.updateAppDialog = appDialogData => setAppDialogData(appDialogData);

  const { title, content, contentBlock, onOk, onClose } = appDialogData;

  return (
    <Dialog open={isAppDialogOpen} onClose={onClose}>
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

export default AppDialogNoContextReRender;
