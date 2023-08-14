import React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export const InformationAlert = ({ severity, alertTitle, alertText,onClose }) => {
  return (
    <Stack spacing={2} >
      <Alert severity={severity}>
        <AlertTitle>{alertTitle}</AlertTitle>
        {alertText}
      </Alert>
    </Stack>
  );
};
