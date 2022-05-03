import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
