import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '../themes/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      color="success"
      sx={{
        background: theme.comp?.btn.color['background']['default-normal'],
        color: theme.comp?.btn.color['content']['default'],
      }}
      variant="contained"
    >
      Switch Theme
    </Button>
  );
};

export default ThemeSwitcher;
