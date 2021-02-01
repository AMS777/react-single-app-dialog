import React from 'react';

import { useDialogTemplateStaticText } from './hooks';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function DialogsWithTemplate() {
  const dialogTemplateStaticText = useDialogTemplateStaticText();

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Dialogs with template component
          </Typography>
          <Typography gutterBottom>
            Dialogs created with a template component. Every dialog is a different component that
            has to be rendered.
          </Typography>
          <Typography gutterBottom>There's no need for Context API.</Typography>
          <Typography gutterBottom>Everything works as expected.</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={dialogTemplateStaticText.open} color="primary" variant="outlined">
            Static text
          </Button>
        </CardActions>
      </Card>
      {dialogTemplateStaticText.Dialog}
    </>
  );
}

export default DialogsWithTemplate;
