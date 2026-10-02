'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { HiXMark, HiArrowTopRightOnSquare } from 'react-icons/hi2';

// Scrollable viewer for a project's full-page screenshot. Pass `project = null` to close.
const ScreenshotModal = ({ project, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key='screenshot-modal'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className='fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm'
        >
          <motion.div
            role='dialog'
            aria-modal='true'
            aria-label={`${project.title} full screenshot`}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className='w-full max-w-6xl h-full max-h-[92vh] flex flex-col bg-primary border border-white/10 rounded-2xl overflow-hidden shadow-2xl'
          >
            {/* header */}
            <div className='flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-white/10'>
              <h3 className='text-white font-semibold text-sm sm:text-base truncate'>{project.title}</h3>
              <div className='flex items-center gap-2 flex-shrink-0'>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-3 py-1.5 bg-accent hover:bg-accent/80 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors'
                >
                  <HiArrowTopRightOnSquare />
                  <span>{project.isPlayStore ? 'Open in Play Store' : 'Visit live site'}</span>
                </a>
                <button
                  ref={closeRef}
                  type='button'
                  onClick={onClose}
                  aria-label='Close screenshot'
                  className='p-1.5 text-2xl text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors'
                >
                  <HiXMark />
                </button>
              </div>
            </div>

            {/* full-page screenshot */}
            <div className='relative flex-1 overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10'>
              <p className='absolute inset-x-0 top-10 text-center text-white/50 text-sm'>Loading screenshot...</p>
              <Image
                src={project.fullImage.src}
                width={project.fullImage.width}
                height={project.fullImage.height}
                alt={`Full page screenshot of ${project.title}`}
                sizes='(min-width: 1200px) 1152px, 100vw'
                className='relative w-full h-auto'
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScreenshotModal;
