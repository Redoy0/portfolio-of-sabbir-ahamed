import {
  RiLinkedinLine,
  RiGithubLine,
  RiFacebookLine,
  RiInstagramLine,
  RiMailLine,
  RiCodeBoxLine,
} from 'react-icons/ri';

import { socials } from '@/data/profile';

const links = [
  { href: socials.github, label: 'GitHub', icon: RiGithubLine },
  { href: socials.linkedin, label: 'LinkedIn', icon: RiLinkedinLine },
  { href: socials.facebook, label: 'Facebook', icon: RiFacebookLine },
  { href: socials.instagram, label: 'Instagram', icon: RiInstagramLine },
  { href: socials.codeforces, label: 'Codeforces', icon: RiCodeBoxLine },
  { href: socials.email, label: 'Email', icon: RiMailLine },
];

const Socials = ({ className = 'text-lg xl:text-2xl' }) => {
  return (
    <div className={`flex items-center gap-x-5 ${className}`}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={label}
          className='hover:text-accent transition-all duration-300'
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
