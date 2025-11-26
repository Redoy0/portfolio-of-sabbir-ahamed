// links
import Link from "next/link";

// icons
import {RiLinkedinLine,RiGithubLine,RiFacebookLine,RiInstagramLine,RiYoutubeLine,RiMailLine,RiCodeBoxLine} from "react-icons/ri";

const Socials = () => {
  return <div href={''} className="flex items-center gap-x-5 text-lg xl:text-2xl">
    <Link href={'https://github.com/Redoy0'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiGithubLine/>
    </Link>
    
    <Link href={'https://www.linkedin.com/in/md-sabbir-ahamed/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
    </Link>
    
    <Link href={'https://www.facebook.com/SabbirAhamedRedoy'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiFacebookLine/>
    </Link>
    
    <Link href={'https://www.instagram.com/sabbir_ahamed_redoy/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link>
    {/* <Link href={'https://www.youtube.com/@rsredoy001'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine/>
    </Link> */}
    <Link href={'https://codeforces.com/profile/Md.SabbirAhamed'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiCodeBoxLine/>
    </Link>
    <Link href={'mailto:sabbirahamed.cse@gmail.com'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiMailLine/>
    </Link>

  </div>;
};

export default Socials;
