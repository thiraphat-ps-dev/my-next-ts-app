// theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';
import themeDefaultLight from './default-dark.json';
import themeDefaultDark from './default-dark.json';

type DesignThemeTypes = Partial<typeof themeDefaultLight>;

declare module '@mui/material/styles' {
  interface Theme extends DesignThemeTypes {
    borderRadius: {
      lg: string;
      max: string;
      md: string;
      sm: string;
      xl: string;
      xs: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends DesignThemeTypes {
    borderRadius?: {
      lg?: string;
      max?: string;
      md?: string;
      sm?: string;
      xl?: string;
      xs?: string;
    };
  }
}

export const lightTheme = createTheme({
  ...themeDefaultLight,
} as ThemeOptions);

export const darkTheme = createTheme({
  ...themeDefaultDark,
} as ThemeOptions);
