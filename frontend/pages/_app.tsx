import { UserProvider } from '@auth0/nextjs-auth0';
import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import GlobalStyles from './../styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  </UserProvider>
);

export default App;
