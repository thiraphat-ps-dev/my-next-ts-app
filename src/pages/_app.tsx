// src/pages/_app.tsx
import * as React from 'react';

import { CssBaseline, Container, Box } from '@mui/material';
import { KPThemeProvider } from 'kp-components';
import { AppProps } from 'next/app';

import ReactQueryProvider from '../common/ReactQueryProvider';
import customThemeJson from '../themes/custom-theme.json'; // เพิ่มธีมใหม่ตามต้องการ
import darkThemeJson from '../themes/default-dark.json';
import lightThemeJson from '../themes/default-light.json';
import ThemeProvider from '../themes/ThemeContext';

const themes = {
  light: lightThemeJson,
  dark: darkThemeJson,
  custom: customThemeJson,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <ThemeProvider themeJson={themes}>
        <KPThemeProvider>
          <CssBaseline />
          <Box
            sx={{
              background: 'linear-gradient(135deg, #71b7e6, #9b59b6)',
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Container>
              <Component {...pageProps} />
            </Container>
          </Box>
        </KPThemeProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

export default MyApp;
