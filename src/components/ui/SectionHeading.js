'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/lib/variants';

const SectionHeading = ({ eyebrow, title, accent, children }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
      className='text-center mb-12 md:mb-16'
    >
      {eyebrow && (
        <p className='text-accent uppercase tracking-[4px] text-xs md:text-sm font-semibold mb-3'>{eyebrow}</p>
      )}
      <h2 className='h2'>
        {title} <span className='text-accent'>{accent}</span>
      </h2>
      {children && (
        <p className='max-w-2xl mx-auto text-white/80 text-sm md:text-base lg:text-lg leading-relaxed'>{children}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
