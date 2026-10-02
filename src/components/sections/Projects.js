'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaGooglePlay } from 'react-icons/fa';
import { HiMagnifyingGlassPlus } from 'react-icons/hi2';

import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Circles from '@/components/ui/Circles';
import ScreenshotModal from '@/components/ui/ScreenshotModal';
import { featuredProjects, moreProjects } from '@/data/projects';
import { fadeIn } from '@/lib/variants';

// The whole card links to the live site (stretched title link); the image and
// buttons sit above that link (z-10) so they keep their own actions.
const FeaturedCard = ({ project, index, onPreview }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
      className='group'
    >
      <div className='relative flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 shadow-2xl hover:shadow-accent/20 hover:-translate-y-2'>
        {/* image: screenshots are 16:9, the same as the frame, so they fill it exactly at every width */}
        <button
          type='button'
          onClick={() => onPreview(project)}
          aria-label={`View full screenshot of ${project.title}`}
          className='group/image relative z-10 block aspect-video w-full overflow-hidden border-b border-white/10 cursor-zoom-in'
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes='(min-width: 1200px) 1040px, 100vw'
            className='object-cover'
          />
          <span className='absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-colors duration-300'></span>
          <span className='absolute bottom-3 right-3 md:bottom-5 md:right-5 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/70 text-white text-xs md:text-sm font-medium backdrop-blur-sm transition-opacity duration-300 lg:opacity-0 lg:group-hover/image:opacity-100'>
            <HiMagnifyingGlassPlus className='text-base md:text-lg' />
            View full screenshot
          </span>
          <span className='absolute top-4 left-4 md:top-6 md:left-6 bg-accent/90 text-white font-bold text-sm md:text-base px-3 md:px-4 py-1 md:py-2 rounded-full backdrop-blur-sm'>
            #{String(index + 1).padStart(2, '0')}
          </span>
        </button>

        {/* content */}
        <div className='p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10'>
          <div className='lg:col-span-3'>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300'>
              <a
                href={project.live}
                target='_blank'
                rel='noopener noreferrer'
                className='after:absolute after:inset-0 focus-visible:outline-none focus-visible:underline'
              >
                {project.title}
              </a>
            </h3>
            <p className='text-white/80 text-sm md:text-base mb-4'>{project.description}</p>
            <ul className='space-y-2'>
              {project.highlights.map((point) => (
                <li key={point} className='flex gap-3 text-white/70 text-sm leading-relaxed font-light'>
                  <span className='mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0'></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className='lg:col-span-2 flex flex-col justify-between gap-6'>
            {/* tech stack */}
            <div>
              <h4 className='text-white/60 text-xs md:text-sm font-semibold uppercase tracking-wider mb-3'>Tech Stack</h4>
              <div className='flex flex-wrap gap-2'>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1.5 bg-white/10 hover:bg-accent/20 border border-white/20 hover:border-accent/50 rounded-lg text-white text-xs md:text-sm font-medium transition-all duration-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* actions */}
            <div className='relative z-10 flex gap-3 md:gap-4'>
              <a
                href={project.live}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-accent hover:bg-accent/80 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 text-sm md:text-base'
              >
                {project.isPlayStore ? <FaGooglePlay /> : <FaExternalLinkAlt className='text-sm' />}
                <span>{project.isPlayStore ? 'Play Store' : 'Live Demo'}</span>
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm md:text-base'
                >
                  <FaGithub className='text-base md:text-lg' />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MoreCard = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.1 * (index % 3))}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      className='flex flex-col bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300'
    >
      <div className='flex items-start justify-between gap-3 mb-3'>
        <h4 className='text-white font-semibold text-lg'>{project.title}</h4>
        <div className='flex items-center gap-3 text-lg text-white/70 flex-shrink-0'>
          {project.github && (
            <a href={project.github} target='_blank' rel='noopener noreferrer' aria-label={`${project.title} source code`} className='hover:text-accent transition-colors'>
              <FaGithub />
            </a>
          )}
          {project.live && (
            <a href={project.live} target='_blank' rel='noopener noreferrer' aria-label={`${project.title} live site`} className='hover:text-accent transition-colors'>
              <FaExternalLinkAlt className='text-sm' />
            </a>
          )}
        </div>
      </div>
      <p className='text-white/70 text-sm leading-relaxed mb-4 flex-1'>{project.description}</p>
      <div className='flex flex-wrap gap-2'>
        {project.stack.map((tech) => (
          <span key={tech} className='text-[11px] text-accent/90 bg-accent/10 px-2 py-0.5 rounded'>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const closePreview = useCallback(() => setPreview(null), []);

  // The modal renders outside <Section> so it isn't trapped in the section's stacking context (nav is z-50)
  return (
    <>
      <Section id='projects' decoration={<Circles />}>
        <SectionHeading eyebrow='Portfolio' title='Featured' accent='Projects'>
          SaaS platforms, mobile apps and full-stack products I&rsquo;ve built, from multi-tenant dashboards to real-time
          tracking.
        </SectionHeading>

        <div className='space-y-10 md:space-y-14'>
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.title} project={project} index={index} onPreview={setPreview} />
          ))}
        </div>

        <h3 className='text-2xl md:text-3xl font-semibold text-center mt-20 md:mt-24 mb-10'>
          More <span className='text-accent'>projects</span>
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {moreProjects.map((project, index) => (
            <MoreCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Section>
      <ScreenshotModal project={preview} onClose={closePreview} />
    </>
  );
};

export default Projects;
