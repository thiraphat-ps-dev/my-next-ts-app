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
import customThemeJson from './custom-theme.json'; // เพิ่มธีมใหม่ตามต้องการ

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

export const customTheme = createTheme({
  ...customThemeJson,
} as ThemeOptions);

interface ThemeContextType {
  toggleTheme: () => void;
  setTheme: (themeName: 'light' | 'dark' | 'custom') => void;
  theme: Theme;
  themeName: string;
}

const themes = {
  light: lightThemeJson,
  dark: darkThemeJson,
  custom: customThemeJson,
};

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  setTheme: () => {},
  theme: createTheme(lightThemeJson as ThemeOptions), // Default theme
  themeName: 'light',
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<string>('light');

  const theme = useMemo(
    () =>
      createTheme(
        themes[themeName as 'light' | 'dark' | 'custom'] as ThemeOptions,
      ),
    [themeName],
  );

  const toggleTheme = () => {
    setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (name: 'light' | 'dark' | 'custom') => {
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, setTheme, theme, themeName }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
