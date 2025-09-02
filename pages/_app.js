import '../styles/globals.css';
import Head from 'next/head';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { SpeedInsights } from "@vercel/speed-insights/next";

//router
import { useRouter } from 'next/router';

//farmer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Sabbir Ahamed - Web Developer</title>
        <meta name="description" content="Sabbir Ahamed - Professional Web Developer specializing in modern web technologies and creative digital solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
            <SpeedInsights />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}


export default MyApp;
