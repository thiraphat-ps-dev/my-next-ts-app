import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        p: 2,
        mt: 'auto',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="inherit">
        © 2024 My Next.js App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
