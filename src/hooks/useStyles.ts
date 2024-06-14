// src/hooks/useStyles.ts
import { SxProps } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme();

  const buttonStyles: SxProps = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  };

  return { buttonStyles };
};

export default useStyles;
