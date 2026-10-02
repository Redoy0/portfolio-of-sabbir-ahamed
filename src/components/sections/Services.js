'use client';

import { motion } from 'framer-motion';
import { RxArrowTopRight } from 'react-icons/rx';

import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Bulb from '@/components/ui/Bulb';
import { services } from '@/data/services';
import { fadeIn } from '@/lib/variants';

const Services = () => {
  return (
    <Section id='services' className='overflow-hidden' decoration={<Bulb />}>
      <SectionHeading eyebrow='What I do' title='My' accent='Services'>
        From pixel-perfect frontends to full-stack SaaS products and cross-platform mobile apps.
      </SectionHeading>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
        {services.map(({ icon: Icon, title, description }, index) => (
          <motion.a
            key={title}
            href='#contact'
            variants={fadeIn('up', 0.1 * index)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex flex-col group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'
          >
            <Icon className='text-4xl text-accent mb-4' />
            <div className='mb-8 flex-1'>
              <h3 className='mb-2 text-lg'>{title}</h3>
              <p className='leading-normal text-sm'>{description}</p>
            </div>
            <RxArrowTopRight className='text-3xl group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default Services;
