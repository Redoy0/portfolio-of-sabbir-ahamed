'use client';

import { motion } from 'framer-motion';
import { HiMapPin, HiCalendarDays } from 'react-icons/hi2';

import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { experience } from '@/data/experience';
import { fadeIn } from '@/lib/variants';

const Experience = () => {
  return (
    <Section id='experience'>
      <SectionHeading eyebrow='Career' title='Work' accent='Experience' />
      {/* timeline */}
      <ol className='max-w-3xl mx-auto border-l border-white/15'>
        {experience.map((job, index) => (
          <motion.li
            key={job.title}
            variants={fadeIn('up', 0.1 * index)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='relative mb-10 last:mb-0 pl-8'
          >
            <span className='absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20'></span>
            <div className='bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20'>
              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2'>
                <h3 className='text-white font-semibold text-lg md:text-xl'>{job.title}</h3>
                <span className='self-start sm:self-auto text-accent text-xs bg-accent/20 px-3 py-1.5 rounded-full whitespace-nowrap'>
                  {job.type}
                </span>
              </div>
              <div className='text-accent font-medium mb-3'>{job.company}</div>
              <div className='flex flex-wrap gap-x-5 gap-y-1 text-white/60 text-xs mb-4'>
                <span className='flex items-center gap-1.5'>
                  <HiCalendarDays className='text-accent' /> {job.duration}
                </span>
                <span className='flex items-center gap-1.5'>
                  <HiMapPin className='text-accent' /> {job.location}
                </span>
              </div>
              <ul className='space-y-2'>
                {job.points.map((point) => (
                  <li key={point} className='flex gap-3 text-white/75 text-sm leading-relaxed font-light'>
                    <span className='mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0'></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
