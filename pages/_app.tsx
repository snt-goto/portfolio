import { AppProps } from 'next/app';

import 'ress';

import 'public/font/style.scss';
import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
