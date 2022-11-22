import '@arco-themes/react-loess/css/arco.css';
import '@/styles/globals.css';
import '@/styles/Nav.css';
import "katex/dist/katex.min.css";
import "@/styles/PrimjsTheme.css";

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
