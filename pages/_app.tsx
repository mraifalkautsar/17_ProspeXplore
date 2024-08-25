import { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css'; // Import global styles here

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
