import Head from 'next/head';

// component
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects - Sabbir Ahamed - Web Development Portfolio & Work</title>
        <meta name="description" content="Sabbir Ahamed's projects and portfolio - Explore web development work by Sabbir Ahamed including modern web applications, Flutter apps, and innovative solutions. View Sabbir Ahamed's professional portfolio at sabbirahamed.site" />
        <meta name="keywords" content="Sabbir Ahamed projects, Md. Sabbir Ahamed portfolio, Sabbir Ahamed DIU, Sabbir DIU, web developer portfolio, Flutter applications, web development, Daffodil International University projects" />
        <meta property="og:title" content="Projects - Sabbir Ahamed - Web Development Portfolio & Work" />
        <meta property="og:description" content="View Sabbir Ahamed's web development projects and portfolio showcasing modern applications and innovative solutions." />
        <link rel="canonical" href="https://sabbirahamed.site/projects" />
      </Head>
      <div className='h-full bg-primary/30 py-20 md:py-32 lg:py-32 xl:py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-x-4 md:gap-x-6 lg:gap-x-8'>
          {/* text */}
          <div className='text-center flex lg:w-[35vw] xl:w-[30vw] flex-col lg:text-left mb-6 md:mb-4 lg:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 lg:mt-8 xl:mt-12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
              My  <span className='text-accent'>Projects.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 md:mb-6 max-w-[400px] md:max-w-[500px] lg:max-w-none mx-auto lg:mx-0 text-sm md:text-base lg:text-lg leading-relaxed'>
              Explore my portfolio featuring a diverse range of innovative projects—spanning cutting-edge web development, real-time mobile apps, machine learning integrations, and impactful digital solutions. Each project highlights modern tech stacks, clean UI/UX, and a strong focus on performance, scalability, and user experience.
            </motion.p>
          </div>
          <motion.div variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full lg:max-w-[60%] xl:max-w-[65%]'>
            {/* slider */}
            <WorkSlider />

          </motion.div>
        </div>
      </div>
      <Bulb />
      </div>
    </>
  );
};

export default Projects;
