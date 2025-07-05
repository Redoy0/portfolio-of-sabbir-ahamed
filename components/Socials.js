// links
import Link from "next/link";

// icons
import {RiLinkedinLine,RiGithubLine,RiFacebookLine,RiInstagramLine,RiYoutubeLine,RiMailLine,RiOrcid} from "react-icons/ri";

const Socials = () => {
  return <div href={''} className="flex items-center gap-x-5 text-2xl">
    <Link href={'https://github.com/Redoy0'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiGithubLine/>
    </Link>
    
    <Link href={''} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
    </Link>
    
    <Link href={''} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiFacebookLine/>
    </Link>
    
    <Link href={''} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link>
    <Link href={''} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine/>
    </Link>
    <Link href={''} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiMailLine/>
    </Link>

  </div>;
};

export default Socials;
