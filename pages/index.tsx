import React from 'react';
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./_app"

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <Head>
        <title>Intelligent Investor Screener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>
      </>
  )
}
