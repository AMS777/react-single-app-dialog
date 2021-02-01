import React from 'react';

import DialogsWithTemplate from './DialogsWithTemplate';

import Typography from '@material-ui/core/Typography';

function Homepage() {
  return (
    <>
      <header>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Single app dialog with Context API
        </Typography>
        <DialogsWithTemplate />
      </header>
    </>
  );
}

export default Homepage;
