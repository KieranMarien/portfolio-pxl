import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return <> <Component {...pageProps} /><Analytics /> <title>Kieran Marien Portfolio page</title>
  <meta name="description" content="My PXL portfolio website. Contains my activities with some extra information." /></>
}
