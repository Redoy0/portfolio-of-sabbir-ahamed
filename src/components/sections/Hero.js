'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowDownTray } from 'react-icons/hi2';

import ParticlesContainer from '@/components/ui/ParticlesContainer';
import ProjectsBtn from '@/components/ui/ProjectsBtn';
import Avatar from '@/components/ui/Avatar';
import { profile } from '@/data/profile';
import { fadeIn } from '@/lib/variants';

const titleVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.6, ease: 'easeIn' } },
};

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % profile.heroTitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className='relative min-h-screen bg-primary/60 overflow-hidden'>
      {/* text */}
      <div className='w-full min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-20 lg:z-auto pointer-events-auto lg:pointer-events-none'>
        <div className='text-center flex flex-col justify-center xl:text-left min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 xl:pt-40 xl:pb-16'>
          {/* current role */}
          <motion.p
            variants={fadeIn('down', 0.1)}
            initial='hidden'
            animate='show'
            className='inline-flex self-center xl:self-start items-center gap-2 mb-4 sm:mb-6 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-white/90 text-xs sm:text-sm font-normal'
          >
            <span className='w-2 h-2 rounded-full bg-accent animate-pulse'></span>
            {profile.role} at {profile.company}
          </motion.p>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6'
          >
            <span className='text-white/90 font-light'>Hello, I&rsquo;m</span>
            <br />
            <span className='bg-gradient-to-r from-white via-slate-200 to-accent bg-clip-text text-transparent font-black tracking-tight'>
              {profile.shortName}
            </span>
            <span className='flex flex-wrap items-baseline justify-center xl:justify-start gap-2 sm:gap-3 mt-3 sm:mt-4'>
              <span className='text-white/90 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium leading-none'>a</span>
              <span className='relative inline-flex items-center min-w-[220px] sm:min-w-[260px] h-[1.9rem] sm:h-[2.25rem] md:h-[2.75rem] xl:h-[3.25rem] overflow-hidden py-0.5 sm:py-1'>
                <AnimatePresence mode='wait'>
                  <motion.span
                    key={currentTitle}
                    variants={titleVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className='text-accent font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl leading-none whitespace-nowrap inline-block'
                  >
                    {profile.heroTitles[currentTitle]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            className='max-w-sm sm:max-w-lg xl:max-w-2xl mx-auto xl:mx-0 mb-8 xl:mb-16 text-white/80 text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed font-light tracking-wide px-2 sm:px-0'
          >
            I build <span className='text-accent font-semibold'>scalable web apps</span> and{' '}
            <span className='text-accent font-semibold'>SaaS platforms</span> with Next.js, React and the MERN stack, backed
            by a <span className='text-accent font-semibold'>competitive programming</span> mindset.
          </motion.p>
          {/* buttons */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            className='flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-6 relative z-30'
          >
            <div className='lg:pointer-events-auto'>
              <ProjectsBtn />
            </div>
            <a
              href={profile.cv}
              download='CV_of_Md_Sabbir_Ahamed.pdf'
              className='group relative inline-flex items-center justify-center px-6 py-3 xl:px-8 xl:py-4 overflow-hidden font-medium text-accent transition-all duration-300 ease-out border-2 border-accent rounded-full hover:text-white hover:shadow-lg hover:shadow-accent/40 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary text-sm xl:text-lg lg:pointer-events-auto'
            >
              {/* accent fill slides in from the left */}
              <span className='absolute inset-0 -translate-x-full bg-accent transition-transform duration-300 ease-out group-hover:translate-x-0'></span>
              {/* label slides up to icon + label; both share one grid cell so the width doesn't jump */}
              <span className='relative grid'>
                <span className='[grid-area:1/1] inline-flex items-center justify-center transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0'>
                  Download Resume
                </span>
                <span
                  aria-hidden='true'
                  className='[grid-area:1/1] inline-flex items-center justify-center gap-2 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
                >
                  <HiArrowDownTray className='w-5 h-5 xl:w-6 xl:h-6' />
                  Download Resume
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-full sm:w-[800px] md:w-[1000px] lg:w-[1200px] h-full absolute right-0 bottom-0 overflow-hidden z-10 lg:z-auto pointer-events-none lg:pointer-events-auto'>
        {/* bg image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 pointer-events-none'></div>
        {/* particles */}
        <div className='hidden sm:block absolute inset-0 pointer-events-none lg:pointer-events-auto'>
          <ParticlesContainer />
        </div>
        {/* avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 lg:right-[8%] pointer-events-none'
        >
          <Avatar />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
