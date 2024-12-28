import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio Axel Madotto</title>
        <meta name="Portfolio Axel Madotto" content="Portfolio avec les différents projets que j'ai réalisés"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
