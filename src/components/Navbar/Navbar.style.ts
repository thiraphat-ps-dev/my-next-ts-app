import { SxProps } from '@mui/system';
import { useKPTheme } from 'kp-components';

const useStyles = () => {
  const { theme } = useKPTheme();

  const navbarStyles = ({ padding }: { padding: string }) => {
    return {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding,
      '&.b': {
        background: 'black',
      },
    } as SxProps;
  };

  return { navbarStyles };
};

export default useStyles;
