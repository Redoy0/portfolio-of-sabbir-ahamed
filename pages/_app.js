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
        <title>Sabbir Ahamed - Professional Web Developer | Portfolio & Projects</title>
        <meta name="description" content="Sabbir Ahamed (Md. Sabbir Ahamed) from DIU is a professional web developer specializing in modern web development, Flutter apps, and innovative digital solutions. Visit Sabbir Ahamed DIU's portfolio to see his best work and projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Sabbir Ahamed, Md. Sabbir Ahamed, Md Sabbir Ahamed, Sabbir Ahamed DIU, Sabbir DIU, Sabbir Ahamed portfolio, Sabbir Ahamed web developer, Sabbir Ahamed projects, web developer, Flutter developer, full stack developer, portfolio, web development, Daffodil International University" />
        <meta name="author" content="Sabbir Ahamed (Md. Sabbir Ahamed)" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#1a1a2e" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sabbirahamed.site/" />
        <meta property="og:title" content="Sabbir Ahamed - Professional Web Developer Portfolio" />
        <meta property="og:description" content="Sabbir Ahamed (Md. Sabbir Ahamed) - Professional web developer portfolio featuring modern web development projects, Flutter apps, and innovative solutions. Explore Sabbir Ahamed's work." />
        <meta property="og:image" content="https://sabbirahamed.site/og-image.jpg" />
        <meta property="og:image:alt" content="Sabbir Ahamed - Web Developer Portfolio" />
        <meta property="og:site_name" content="Sabbir Ahamed Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sabbirahamed.site/" />
        <meta name="twitter:title" content="Sabbir Ahamed - Web Developer Portfolio" />
        <meta name="twitter:description" content="Sabbir Ahamed - Professional web developer portfolio showcasing modern web development, Flutter apps, and innovative projects by Sabbir Ahamed." />
        <meta name="twitter:image" content="https://sabbirahamed.site/og-image.jpg" />
        <meta name="twitter:image:alt" content="Sabbir Ahamed Portfolio" />
        <meta name="twitter:creator" content="@sabbirahamed" />
        
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
              "alternateName": ["Md. Sabbir Ahamed", "Md Sabbir Ahamed", "Sabbir"],
              "url": "https://sabbirahamed.site/",
              "image": "https://sabbirahamed.site/avatar.png",
              "description": "Sabbir Ahamed (Md. Sabbir Ahamed) is a professional web developer and software engineer specializing in modern web development, Flutter mobile applications, full-stack development, and innovative digital solutions. Visit Sabbir Ahamed's portfolio at sabbirahamed.site",
              "jobTitle": "Web Developer & Software Engineer",
              "knowsAbout": ["Web Development", "Sabbir Ahamed Portfolio", "Flutter Development", "Full Stack Development", "UI/UX Design", "React", "Next.js", "JavaScript", "Software Engineering"],
              "brand": "Sabbir Ahamed",
              "identifier": "Sabbir Ahamed",
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
