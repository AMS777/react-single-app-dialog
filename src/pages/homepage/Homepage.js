import React from 'react';

import DialogsWithTemplate from 'components/dialogsWithTemplate';
import DialogsWithSingleComponentError from 'components/dialogsWithSingleComponentError';

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
      </main>
    </>
  );
}

export default Homepage;
