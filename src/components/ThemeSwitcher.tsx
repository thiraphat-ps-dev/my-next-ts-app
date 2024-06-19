import React from 'react';

import { Button } from '@mui/material';
import { useKPTheme } from 'kp-components';

const ThemeSwitcher: React.FC = () => {
  const { toggleTheme, theme } = useKPTheme();

  return (
    <Button
      onClick={toggleTheme}
      color="success"
      sx={{
        background: theme.comp?.btn.color['background']['default-normal'],
        color: theme.comp?.btn.color['content']['default'],
        ':hover': {
          background: theme.comp?.btn.color['background']['default-hover'],
          color: theme.comp?.btn.color['content']['default'],
        },
      }}
      variant="contained"
    >
      Switch Theme
    </Button>
  );
};

export default ThemeSwitcher;
