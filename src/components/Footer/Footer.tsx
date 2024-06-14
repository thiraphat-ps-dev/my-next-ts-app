import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 3,
        backgroundColor: '#3f51b5',
        color: '#fff',
        mt: 4,
      }}
    >
      <Typography variant="body1">
        © 2024 My Next.js App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
