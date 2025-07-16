//next image
import Image from "next/image";

//next link 
import Link from "next/link";

//icons
import {HiArrowRight} from "react-icons/hi2";


const ProjectsBtn = () => {
  return (
      <div className='mx-auto xl:mx-0'>
      <Link
      href={'/work'}
      className='relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[185px] lg:h-[185px] flex justify-center items-center
      bg-circleStar bg-cover bg-center bg-no-repeat group'>
      <Image
      src={'/rounded-text.png'}
      width={141}
      height={148}
      alt=''
      className='animate-spin-slow w-full h-full max-w-[105px] max-h-[112px] sm:max-w-[120px] sm:max-h-[128px] lg:max-w-[141px] lg:max-h-[148px]'/>
      <HiArrowRight className='absolute text-2xl sm:text-3xl lg:text-4xl group-hover:translate-x-2
      transition-all duration-300' />
      </Link>
      </div>
  );
};

export default ProjectsBtn;
