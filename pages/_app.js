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
        <title>Sabbir Ahamed | Md. Sabbir Ahamed - Best Portfolio for Web Developer</title>
        <meta name="description" content="Md. Sabbir Ahamed's best portfolio for web showcasing modern web development projects, Flutter apps, and innovative digital solutions. Explore Sabbir Ahamed's professional web developer portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Sabbir Ahamed, Md. Sabbir Ahamed, Md Sabbir Ahamed, web developer portfolio, best portfolio for web, best web portfolio, web development portfolio, Flutter developer, full stack developer, professional web developer, creative portfolio" />
        <meta name="author" content="Md. Sabbir Ahamed" />
        <meta name="theme-color" content="#1a1a2e" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sabbirahamed.site/" />
        <meta property="og:title" content="Md. Sabbir Ahamed - Best Portfolio for Web Developer" />
        <meta property="og:description" content="Explore Md. Sabbir Ahamed's best portfolio for web featuring modern web development projects, Flutter mobile apps, and innovative digital solutions." />
        <meta property="og:image" content="https://sabbirahamed.site/og-image.jpg" />
        <meta property="og:site_name" content="Md. Sabbir Ahamed - Web Developer Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sabbirahamed.site/" />
        <meta name="twitter:title" content="Md. Sabbir Ahamed - Best Portfolio for Web" />
        <meta name="twitter:description" content="Explore Md. Sabbir Ahamed's best portfolio for web featuring modern web development projects and innovative digital solutions." />
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
              "name": "Md. Sabbir Ahamed",
              "alternateName": ["Sabbir Ahamed", "Sabbir", "Md Sabbir Ahamed"],
              "url": "https://sabbirahamed.site/",
              "image": "https://sabbirahamed.site/avatar.png",
              "description": "Md. Sabbir Ahamed is a professional web developer with the best portfolio for web showcasing modern web development projects, Flutter apps, and innovative digital solutions.",
              "jobTitle": "Web Developer",
              "knowsAbout": ["Web Development", "Web Developer Portfolio", "Best Portfolio for Web", "Flutter Development", "Full Stack Development", "UI/UX Design", "React", "Next.js"],
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
