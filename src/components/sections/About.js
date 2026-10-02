'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { HiAcademicCap, HiBriefcase, HiMapPin, HiEnvelope } from 'react-icons/hi2';

import Section from '@/components/ui/Section';
import Circles from '@/components/ui/Circles';
import { profile, stats, education } from '@/data/profile';
import { fadeIn } from '@/lib/variants';

const facts = [
  { icon: HiBriefcase, label: 'Currently', value: `${profile.role} @ ${profile.company}` },
  { icon: HiMapPin, label: 'Based in', value: profile.location },
  { icon: HiEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
];

const About = () => {
  return (
    <Section id='about' className='bg-primary/30' decoration={<Circles />}>
      <div className='flex flex-col xl:flex-row gap-12 xl:gap-16 items-center'>
        {/* text */}
        <div className='flex-1 text-center xl:text-left'>
          <motion.p
            variants={fadeIn('right', 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='text-accent uppercase tracking-[4px] text-xs md:text-sm font-semibold mb-3'
          >
            About me
          </motion.p>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='text-3xl md:text-4xl 2xl:text-5xl font-bold leading-tight mb-6'
          >
            <span className='block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent py-1'>
              Empowering
            </span>
            <span className='block bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent font-extrabold tracking-wide py-1'>
              innovation
            </span>
            <span className='block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent py-1'>
              through code and design.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='max-w-[560px] mx-auto xl:mx-0 mb-10 text-sm sm:text-base text-white/80'
          >
            {profile.summary}
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='grid grid-cols-2 sm:grid-cols-4 gap-y-8 max-w-xl mx-auto xl:mx-0'
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative px-2 ${index < stats.length - 1 ? 'sm:after:w-[1px] sm:after:h-full sm:after:bg-white/10 sm:after:absolute sm:after:top-0 sm:after:right-0' : ''}`}
              >
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp end={stat.value} duration={4} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[110px] mx-auto xl:mx-0'>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* cards */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
          className='w-full max-w-md xl:max-w-[44%] flex flex-col gap-6'
        >
          {/* education */}
          <div className='bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20'>
            <div className='flex items-center justify-between gap-3 mb-4'>
              <h3 className='text-white font-semibold text-lg flex items-center gap-2'>
                <HiAcademicCap className='text-accent text-2xl' /> Education
              </h3>
              <span className='text-accent text-xs bg-accent/20 px-3 py-1.5 rounded-full whitespace-nowrap'>{education.result}</span>
            </div>
            <div className='text-white font-medium'>{education.degree}</div>
            <div className='text-accent text-sm mt-1'>{education.institution}</div>
            <div className='text-white/60 text-xs mt-2'>{education.duration}</div>
          </div>
          {/* quick facts */}
          <div className='bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4'>
            {facts.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className='flex items-start gap-3'>
                <Icon className='text-accent text-xl mt-0.5 flex-shrink-0' />
                <div>
                  <div className='text-white/50 text-xs uppercase tracking-wider'>{label}</div>
                  {href ? (
                    <a href={href} className='text-white text-sm hover:text-accent transition-colors break-all'>
                      {value}
                    </a>
                  ) : (
                    <div className='text-white text-sm'>{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
