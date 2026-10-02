'use client';

import { navData } from '@/data/nav';
import useActiveSection from '@/hooks/useActiveSection';

const sectionIds = navData.map((link) => link.id);

const Nav = () => {
  const active = useActiveSection(sectionIds);

  return (
    <nav className='fixed bottom-0 z-50 w-full xl:bottom-auto xl:top-0 xl:right-[2%] xl:w-16 xl:h-screen flex flex-col items-center xl:justify-center'>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-8 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-0 h-[60px] sm:h-[65px] md:h-[70px] xl:h-max xl:py-8 bg-white/10 backdrop-blur-sm text-xl md:text-2xl xl:text-xl xl:rounded-full'>
        {navData.map(({ id, name, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={name}
            aria-current={active === id ? 'true' : undefined}
            className={`relative flex items-center group hover:text-accent transition-all duration-300 ${active === id ? 'text-accent' : ''}`}
          >
            {/* tooltip */}
            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{name}</div>
                {/* triangle */}
                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
              </div>
            </div>
            {/* icon */}
            <Icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
