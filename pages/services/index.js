import Head from 'next/head';

// component
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <>
      <Head>
        <title>Services - Md. Sabbir Ahamed | Professional Web Developer Services</title>
        <meta name="description" content="Md. Sabbir Ahamed offers professional web development services including modern web design, Flutter app development, UI/UX design. Best portfolio for web services." />
        <meta name="keywords" content="Md. Sabbir Ahamed services, Sabbir Ahamed web development, web developer services, best portfolio for web, professional web developer services, Flutter development" />
        <link rel="canonical" href="https://sabbirahamed.site/services" />
      </Head>
      <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'>
              My  <span className='text-accent'>services.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              I design and build responsive web apps, craft clean and intuitive UI/UX,
              develop cross-platform mobile apps with Flutter, and integrate practical
              machine learning—focused on performance, accessibility, and scalability.
            </motion.p>
          </div>
          <motion.div variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'>
            {/* slider */}
            <ServiceSlider />

          </motion.div>
        </div>
      </div>
      <Bulb />
      </div>
    </>
  );
};

export default Services;
