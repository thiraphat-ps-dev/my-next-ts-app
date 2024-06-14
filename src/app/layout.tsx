// src/app/layout.tsx
import * as React from 'react';
import ThemeProviderWrapper from '../components/ThemeProviderWrapper';

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
