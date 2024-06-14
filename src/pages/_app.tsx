// src/pages/_app.tsx
import * as React from 'react';
import { AppProps } from 'next/app';
import { CssBaseline, Container, Box } from '@mui/material';
import ThemeProviderWrapper from '../components/common/ThemeProviderWrapper';
import ReactQueryProvider from '@/components/common/ReactQueryProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <ThemeProviderWrapper>
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
      </ThemeProviderWrapper>
    </ReactQueryProvider>
  );
}

export default MyApp;
