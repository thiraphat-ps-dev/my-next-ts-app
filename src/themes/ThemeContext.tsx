import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  ReactNode,
} from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  ThemeOptions,
  Theme,
} from '@mui/material/styles';
import darkThemeJson from './default-dark.json';
import lightThemeJson from './default-light.json';

type DesignThemeTypes = Partial<typeof lightThemeJson>;

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
  ...lightThemeJson,
} as ThemeOptions);

export const darkTheme = createTheme({
  ...darkThemeJson,
} as ThemeOptions);

interface ThemeContextType {
  toggleTheme: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  theme: createTheme(lightThemeJson as ThemeOptions), // Default theme
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = useMemo(
    () =>
      createTheme((isDark ? darkThemeJson : lightThemeJson) as ThemeOptions),
    [isDark],
  );

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
