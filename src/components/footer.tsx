import { Typography, Box } from '@mui/material';

import React from 'react';

function Footer(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '77px',
        backgroundColor: 'grey',
        width: '100%',
      }}
    >
      <Typography>© 2022 | All Rights Reserved | Developed with </Typography>
    </Box>
  );
}

export default Footer;
