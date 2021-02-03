import React, { useState } from 'react';

import { useDialogStaticText, useDialogDynamicText, useDialogForm } from './hooks';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function DialogsWithSingleComponentNoContextReRender() {
  const [dialogResult, setDialogResult] = useState();

  const dialogStaticText = useDialogStaticText(setDialogResult);
  const dialogDynamicText = useDialogDynamicText(setDialogResult);
  const dialogForm = useDialogForm(setDialogResult);

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Dialogs with single component - Context API - No Context Re-render
          </Typography>
          <Typography gutterBottom>
            Dialogs created with a single component for all the application.{' '}
            <strong>There is only one dialog component rendered</strong> in the application and it's
            configured every time a dialog is needed.
          </Typography>
          <Typography gutterBottom>
            It's configured with Context API. The main structure of the code is similar as on the
            previous example, but{' '}
            <strong>
              the application dialog state has been moved from the context file to the dialog
              component.
            </strong>{' '}
            The context file only contains a reference to the application dialog with useRef(), so
            that{' '}
            <strong>
              it doesn't re-render when a dialog is changed, and neither the components that consume
              it.
            </strong>
          </Typography>
          <Typography gutterBottom>
            <strong>Static text, dynamic text and forms work correctly.</strong>
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={dialogStaticText.open} color="primary" variant="outlined">
            Static text
          </Button>
          <Button
            onClick={() => dialogDynamicText.open('dynamic text')}
            color="primary"
            variant="outlined"
          >
            Dynamic text
          </Button>
          <Button onClick={dialogForm.open} color="primary" variant="outlined">
            Form
          </Button>
          <Typography gutterBottom>Result of dialog: {dialogResult}</Typography>
        </CardActions>
      </Card>
    </>
  );
}

export default DialogsWithSingleComponentNoContextReRender;
