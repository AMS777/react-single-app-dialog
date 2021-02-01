import React, { useState } from 'react';

import {
  useDialogTemplateStaticText,
  useDialogTemplateDynamicText,
  useDialogTemplateForm,
} from './hooks';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function DialogsWithTemplate() {
  const [dialogResult, setDialogResult] = useState();

  const dialogTemplateStaticText = useDialogTemplateStaticText(setDialogResult);
  const dialogTemplateDynamicText = useDialogTemplateDynamicText(setDialogResult);
  const dialogTemplateForm = useDialogTemplateForm(setDialogResult);

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Dialogs with template component - No Context API
          </Typography>
          <Typography gutterBottom>
            Dialogs created with a template component.{' '}
            <strong>Every dialog is a different component that has to be rendered.</strong> If there
            are 20 dialogs in the application, 20 components that are almost identical are rendered.
          </Typography>
          <Typography gutterBottom>There's no need for Context API.</Typography>
          <Typography gutterBottom>
            <strong>Static text, dynamic text and forms work correctly.</strong>
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={dialogTemplateStaticText.open} color="primary" variant="outlined">
            Static text
          </Button>
          <Button
            onClick={() => dialogTemplateDynamicText.open('dynamic text')}
            color="primary"
            variant="outlined"
          >
            Dynamic text
          </Button>
          <Button onClick={dialogTemplateForm.open} color="primary" variant="outlined">
            Form
          </Button>
          <Typography gutterBottom>Result of dialog: {dialogResult}</Typography>
        </CardActions>
      </Card>
      {dialogTemplateStaticText.Dialog}
      {dialogTemplateDynamicText.Dialog}
      {dialogTemplateForm.Dialog}
    </>
  );
}

export default DialogsWithTemplate;
