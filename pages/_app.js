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
        {/* Primary Meta Tags */}
        <title>Sabbir Ahamed - Best Web Developer Portfolio | Professional Web Development</title>
        <meta name="description" content="Sabbir Ahamed's best web developer portfolio showcasing modern web development projects, Flutter apps, and innovative digital solutions. Explore Sabbir's professional portfolio and creative work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Sabbir Ahamed, Sabbir, web developer portfolio, best web developer portfolio, best portfolio, web development, Flutter developer, full stack developer, professional portfolio, creative portfolio, modern web design" />
        <meta name="author" content="Sabbir Ahamed" />
        <meta name="theme-color" content="#1a1a2e" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sabbirahamed.site/" />
        <meta property="og:title" content="Sabbir Ahamed - Best Web Developer Portfolio" />
        <meta property="og:description" content="Explore Sabbir Ahamed's best web developer portfolio featuring modern web applications, Flutter mobile apps, and innovative projects." />
        <meta property="og:image" content="https://sabbirahamed.site/og-image.jpg" />
        <meta property="og:site_name" content="Sabbir Ahamed Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sabbirahamed.site/" />
        <meta name="twitter:title" content="Sabbir Ahamed - Best Web Developer Portfolio" />
        <meta name="twitter:description" content="Explore Sabbir Ahamed's best web developer portfolio featuring modern web applications and innovative projects." />
        <meta name="twitter:image" content="https://sabbirahamed.site/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://sabbirahamed.site/" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sabbir Ahamed",
              "alternateName": "Sabbir",
              "url": "https://sabbirahamed.site/",
              "image": "https://sabbirahamed.site/avatar.png",
              "description": "Sabbir Ahamed is a professional web developer with the best portfolio showcasing modern web development, Flutter apps, and innovative digital solutions.",
              "jobTitle": "Web Developer",
              "knowsAbout": ["Web Development", "Web Developer Portfolio", "Flutter Development", "Full Stack Development", "UI/UX Design", "React", "Next.js"],
              "sameAs": [
                "https://github.com/Redoy0",
                "https://www.linkedin.com/in/sabbir-ahamed-rs/"
              ]
            })
          }}
        />
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
