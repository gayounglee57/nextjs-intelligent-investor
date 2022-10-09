import React from "react";
import Head from "next/head";
import App from "./_app";

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
  );
}
