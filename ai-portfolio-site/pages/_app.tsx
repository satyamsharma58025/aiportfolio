import '@fontsource/inter/index.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, ThemeToggle } from '../components/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Satyam Sharma | AI Developer Portfolio</title>
        <meta name="description" content="AI Developer Portfolio for Satyam Sharma. Projects, skills, and experience in AI, ML, and backend engineering." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeToggle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
