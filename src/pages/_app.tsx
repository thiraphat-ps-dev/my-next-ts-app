// src/pages/_app.tsx
import { AppProps } from 'next/app';
import ReactQueryProvider from '../components/ReactQueryProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
    </ReactQueryProvider>
  );
}

export default MyApp;
