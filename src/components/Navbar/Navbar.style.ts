import { SxProps } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme();

  const navbarStyles: SxProps = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '0 16px',
  };

  return { navbarStyles };
};

export default useStyles;
