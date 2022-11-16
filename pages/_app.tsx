import '@arco-themes/react-loess/css/arco.css';
import '@/styles/globals.css';
import '@/styles/LandingHeader.css';
import '@/styles/NavBar.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
