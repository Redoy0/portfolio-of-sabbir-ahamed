import Image from 'next/image';

import Socials from '@/components/layout/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-8 sm:px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-4'>
          {/* logo */}
          <a href='#home' aria-label='Back to top'>
            <Image src='/org-logo.svg' width={220} height={45} alt='Sabbir Ahamed' priority />
          </a>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
