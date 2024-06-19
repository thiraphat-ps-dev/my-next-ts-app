// src/pages/_app.tsx
import * as React from 'react';

import { CssBaseline, Container, Box } from '@mui/material';
import { KPThemeProvider } from 'kp-components';
import { AppProps } from 'next/app';

import ReactQueryProvider from '../common/ReactQueryProvider';
// import ThemeProvider from '../themes/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
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
    </ReactQueryProvider>
  );
}

export default MyApp;
