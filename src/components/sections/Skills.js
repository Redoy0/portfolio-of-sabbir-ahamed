'use client';

import { motion } from 'framer-motion';

import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillGroups } from '@/data/skills';
import { fadeIn } from '@/lib/variants';

const Skills = () => {
  return (
    <Section id='skills' className='bg-primary/30'>
      <SectionHeading eyebrow='Toolbox' title='Technical' accent='Skills'>
        The languages, frameworks and tools I use to ship production web apps.
      </SectionHeading>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {skillGroups.map(({ title, icon: GroupIcon, skills }, index) => (
          <motion.div
            key={title}
            variants={fadeIn('up', 0.1 * (index % 3))}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20'
          >
            <h3 className='flex items-center gap-3 text-white font-semibold text-lg mb-5'>
              <GroupIcon className='text-accent text-2xl' />
              {title}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {skills.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className='inline-flex items-center gap-2 text-xs md:text-sm bg-white/5 text-white/85 px-3 py-1.5 rounded-lg border border-white/10 hover:border-accent/40 hover:text-accent transition-all duration-300'
                >
                  {Icon && <Icon className='text-base' />}
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
