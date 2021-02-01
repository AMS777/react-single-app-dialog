import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function DialogsWithTemplate() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Dialogs with template component
        </Typography>
        <Typography gutterBottom>
          Dialogs created with a template component. Every dialog is a different component that has
          to be rendered.
        </Typography>
        <Typography gutterBottom>There's no need for Context API.</Typography>
        <Typography gutterBottom>Everything works as expected.</Typography>
      </CardContent>
    </Card>
  );
}

export default DialogsWithTemplate;
