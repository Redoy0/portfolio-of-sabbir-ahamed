'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaBook } from 'react-icons/fa';
import { HiPuzzlePiece, HiDocumentArrowDown, HiListBullet, HiBookOpen, HiArrowUpRight, HiArrowDownTray } from 'react-icons/hi2';

import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { problemSolving, competitions, certifications, publications } from '@/data/achievements';
import { fadeIn } from '@/lib/variants';

const cardClass =
  'bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-5 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20';

const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div
    variants={fadeIn('up', delay)}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.15 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Outlined accent pill; on hover the accent fill slides in from the left.
// With `hoverLabel`/`hoverIcon`, the content also slides to that label on hover
// (both layers share one grid cell, so the button width doesn't jump).
const ActionLink = ({ href, icon: Icon, children, hoverLabel, hoverIcon: HoverIcon }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='group/action relative inline-flex flex-shrink-0 items-center gap-1.5 overflow-hidden rounded-full border border-accent/60 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent transition-all duration-300 hover:border-accent hover:text-white hover:shadow-lg hover:shadow-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95'
  >
    <span className='absolute inset-0 -translate-x-full bg-accent transition-transform duration-300 ease-out group-hover/action:translate-x-0'></span>
    {hoverLabel ? (
      <span className='relative grid'>
        <span className='[grid-area:1/1] inline-flex items-center justify-center gap-1.5 transition-all duration-300 group-hover/action:-translate-y-full group-hover/action:opacity-0'>
          <Icon className='text-sm' />
          <span className='whitespace-nowrap'>{children}</span>
          <HiArrowUpRight className='text-[11px]' />
        </span>
        <span
          aria-hidden='true'
          className='[grid-area:1/1] inline-flex items-center justify-center gap-1.5 translate-y-full opacity-0 transition-all duration-300 group-hover/action:translate-y-0 group-hover/action:opacity-100'
        >
          <HoverIcon className='text-sm' />
          <span className='whitespace-nowrap'>{hoverLabel}</span>
        </span>
      </span>
    ) : (
      <>
        <Icon className='relative text-sm transition-transform duration-300 group-hover/action:scale-110' />
        <span className='relative whitespace-nowrap'>{children}</span>
        <HiArrowUpRight className='relative text-[11px] transition-transform duration-300 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5' />
      </>
    )}
  </a>
);

const BlockTitle = ({ icon: Icon, children }) => (
  <h3 className='flex items-center gap-3 text-xl md:text-2xl font-semibold mb-6'>
    <Icon className='text-accent' />
    {children}
  </h3>
);

const Achievements = () => {
  return (
    <Section id='achievements' className='bg-primary/30'>
      <SectionHeading eyebrow='Recognition' title='Achievements &' accent='Publications'>
        Competitive programming, contest results, certifications and research.
      </SectionHeading>

      {/* problem solving */}
      <Reveal className='mb-16'>
        <BlockTitle icon={HiPuzzlePiece}>Problem Solving</BlockTitle>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4'>
          {problemSolving.profiles.map((item) => (
            <a
              key={item.platform}
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className={`${cardClass} group text-center`}
            >
              <div className='text-white/70 text-sm mb-2 group-hover:text-white transition-colors'>{item.platform}</div>
              <div className='text-2xl md:text-3xl font-extrabold text-accent mb-1'>{item.stat}</div>
              <div className='text-white/50 text-xs'>{item.detail}</div>
            </a>
          ))}
        </div>
        <p className='mt-6 text-center xl:text-left text-sm md:text-base text-white/80'>
          Total solved: <span className='text-accent font-semibold'>{problemSolving.total}</span>
          <span className='mx-3 text-white/30'>|</span>
          Contests: <span className='text-accent font-semibold'>{problemSolving.contests}</span> (incl. onsites)
        </p>
      </Reveal>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-10 mb-16'>
        {/* competitions */}
        <Reveal>
          <BlockTitle icon={FaTrophy}>Competitions</BlockTitle>
          <ul className='flex flex-col gap-3'>
            {competitions.map((item) => (
              <li key={item.title} className={`${cardClass} flex items-center gap-4`}>
                <span className='min-w-[64px] text-center text-accent font-extrabold text-lg'>{item.place}</span>
                <span className='flex-1 text-white/85 text-sm'>{item.title}</span>
                <ActionLink href={item.url} icon={HiListBullet}>
                  Standing
                </ActionLink>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* certifications */}
        <Reveal delay={0.1}>
          <BlockTitle icon={FaCertificate}>Certifications</BlockTitle>
          <ul className='flex flex-col gap-3'>
            {certifications.map((item) => (
              <li key={item.title} className={`${cardClass} flex items-center gap-4`}>
                <div className='flex-1'>
                  <div className='text-white/90 text-sm font-medium'>{item.title}</div>
                  <div className='text-accent/90 text-xs mt-1'>
                    {item.issuer}
                    {item.year && ` · ${item.year}`}
                  </div>
                </div>
                <ActionLink href={item.url} icon={HiDocumentArrowDown} hoverLabel='Download' hoverIcon={HiArrowDownTray}>
                  Certificate
                </ActionLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* publications */}
      <Reveal>
        <BlockTitle icon={FaBook}>Publications</BlockTitle>
        {publications.map((item) => (
          <div key={item.doi} className={`${cardClass} p-6 md:p-8`}>
            <div className='flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3'>
              <h4 className='text-white font-semibold text-base md:text-lg leading-snug'>{item.title}</h4>
              <span className='self-start text-accent text-xs bg-accent/20 px-3 py-1.5 rounded-full whitespace-nowrap'>
                Research Paper
              </span>
            </div>
            <div className='text-white/75 text-sm mb-2'>{item.authors}</div>
            <div className='text-accent text-sm mb-1'>
              <em>{item.journal}</em> ({item.year}), {item.volume}
            </div>
            <div className='flex flex-wrap items-center justify-between gap-3 mt-4'>
              <span className='text-xs text-white/60'>DOI: {item.doi}</span>
              <ActionLink href={item.url} icon={HiBookOpen}>
                Read Paper
              </ActionLink>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
};

export default Achievements;
