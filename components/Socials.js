// links
import Link from "next/link";

// icons
import {RiLinkedinLine,RiGithubLine,RiFacebookLine,RiInstagramLine} from "react-icons/ri";

const Socials = () => {
  return <div href={''} className="flex items-center gap-x-6 text-2xl">
    <Link href={''} className="hover:text-accent transition-all duration-300 hover:scale-125 transform">
      <RiGithubLine/>
    </Link>
    
    <Link href={''} className="hover:text-accent transition-all duration-300 hover:scale-125 transform">
      <RiLinkedinLine/>
    </Link>
    
    <Link href={''} className="hover:text-accent transition-all duration-300 hover:scale-125 transform">
      <RiFacebookLine/>
    </Link>
    
    <Link href={''} className="hover:text-accent transition-all duration-300 hover:scale-125 transform">
      <RiInstagramLine/>
    </Link>

  </div>;
};

export default Socials;
