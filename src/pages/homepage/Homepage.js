import React from 'react';

import DialogsWithTemplate from 'components/dialogsWithTemplate';
import DialogsWithSingleComponentError from 'components/dialogsWithSingleComponentError';
import DialogsWithSingleComponent from 'components/dialogsWithSingleComponent';

import Typography from '@material-ui/core/Typography';

function Homepage() {
  return (
    <>
      <header>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Single app dialog with Context API
        </Typography>
      </header>
      <main>
        <DialogsWithTemplate />
        <DialogsWithSingleComponentError />
        <DialogsWithSingleComponent />
      </main>
    </>
  );
}

export default Homepage;
