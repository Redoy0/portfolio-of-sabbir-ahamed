import { Sora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

import Header from '@/components/layout/Header';
import Nav from '@/components/layout/Nav';
import TopLeftImg from '@/components/layout/TopLeftImg';
import { profile, socials } from '@/data/profile';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const title = 'Sabbir Ahamed - Jr. Software Engineer & MERN Stack Developer | Portfolio';
const description =
  'Sabbir Ahamed Redoy (Md. Sabbir Ahamed) is a Jr. Software Engineer at Rentyard Limited and a Daffodil International University (DIU) CSE graduate, building SaaS platforms and full-stack web apps with Next.js, React, Node.js and MongoDB. Explore his projects, skills and achievements.';

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: [
    'Sabbir Ahamed',
    'Sabbir Ahamed Redoy',
    'Md. Sabbir Ahamed',
    'Md Sabbir Ahamed',
    'Sabbir Ahamed DIU',
    'Sabbir DIU',
    'Sabbir Redoy',
    'Sabbir Ahamed portfolio',
    'Sabbir Ahamed software engineer',
    'Sabbir Ahamed web developer',
    'MERN stack developer',
    'Next.js developer',
    'React developer',
    'full stack developer',
    'competitive programmer',
    'Rentyard',
    'Daffodil International University',
  ],
  authors: [{ name: 'Sabbir Ahamed Redoy (Md. Sabbir Ahamed)', url: profile.siteUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: { 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title,
    description,
    siteName: 'Sabbir Ahamed Portfolio',
    locale: 'en_US',
    images: [{ url: '/portfolio2.png', width: 1280, height: 720, alt: 'Sabbir Ahamed - Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [{ url: '/portfolio2.png', alt: 'Sabbir Ahamed - Portfolio' }],
    creator: '@sabbirahamed',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico' }],
    apple: '/favicon.svg',
  },
  verification: {
    other: { 'msvalidate.01': 'C3093135B0BD4AA33F43CB5F1823862B' },
  },
};

export const viewport = {
  themeColor: '#1a1a2e',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sabbir Ahamed Redoy',
  alternateName: ['Sabbir Ahamed', 'Md. Sabbir Ahamed', 'Md Sabbir Ahamed', 'Sabbir Redoy', 'Sabbir Ahamed DIU', 'Sabbir DIU'],
  url: `${profile.siteUrl}/`,
  image: `${profile.siteUrl}/avatar/avatar.png`,
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  worksFor: { '@type': 'Organization', name: profile.company },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Daffodil International University' },
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  description,
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Flutter', 'Competitive Programming'],
  sameAs: [socials.github, socials.linkedin, socials.codeforces],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary'>
      <body className={`${sora.variable} font-sora`}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <div className='relative min-h-screen bg-site bg-cover bg-fixed bg-no-repeat text-white overflow-x-hidden pb-[60px] sm:pb-[65px] md:pb-[70px] xl:pb-0'>
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
