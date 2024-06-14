import ReactQueryProvider from '../components/ReactQueryProvider';
import ThemeProviderWrapper from '../components/ThemeProviderWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
