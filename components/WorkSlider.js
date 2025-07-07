//work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Kechedei',
          path: '/thumb1.jpg',
          description: 'Designed and developed a responsive website for a laundry shop to enable customers to explore services, place orders, and track laundry status.',
          stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
          github: 'https://github.com/sabbir-ahamed/kechedei',
          live: 'https://kechedei-demo.vercel.app',
        },
        {
          title: 'ScheduLearn',
          path: '/thumb2.jpg',
          description: 'Created a responsive web platform to visualize CPU scheduling algorithms like FCFS, SJF, and Round Robin through interactive real-time simulations.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/sabbir-ahamed/schedulearn',
          live: 'https://schedulearn-demo.vercel.app',
        },
        {
          title: 'NeuvoHomes 2',
          path: '/thumb4.jpg',
          description: 'Developed a platform for ordering 3D home designs and exploring pre-made home delivery options. The site features a responsive design and a user-friendly ordering system.',
          stack: ['HTML', 'CSS', 'Bootstrap', 'Django'],
          github: 'https://github.com/sabbir-ahamed/neuvo-homes',
          live: 'https://neuvo-homes-demo.vercel.app',
        },
        {
          title: 'Portfolio Website',
          path: '/thumb4.jpg',
          description: 'Built a sleek, responsive portfolio website to showcase my work, skills, and experience—with smooth navigation and interactive elements for a standout user experience across all devices.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/sabbir-ahamed/portfolio',
          live: 'https://sabbir-ahamed.vercel.app',
        },
      ],
    },
    {
      images: [
        {
          title: 'DIU LeaderBoard',
          path: '/thumb3.jpg',
          description: 'Created a gamified mobile app for DIU students to track academic rankings, featuring secure login and real-time leaderboard to boost engagement and motivation.',
          stack: ['Flutter','Firebase', 'Firestore', 'API'],
          github: 'https://github.com/sabbir-ahamed/diu-leaderboard',
          live: 'https://diu-leaderboard-demo.vercel.app',
        },
        {
          title: 'E-Commerce Platform',
          path: '/thumb4.jpg',
          description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard for managing products and orders.',
          stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          github: 'https://github.com/sabbir-ahamed/ecommerce-platform',
          live: 'https://ecommerce-demo.vercel.app',
        },
        {
          title: 'AI Chat Application',
          path: '/thumb1.jpg',
          description: 'Intelligent chatbot with natural language processing capabilities, real-time conversation, and machine learning integration for improved responses.',
          stack: ['Python', 'TensorFlow', 'Flask', 'React'],
          github: 'https://github.com/sabbir-ahamed/ai-chat-app',
          live: 'https://ai-chat-demo.vercel.app',
        },
        {
          title: 'Weather Dashboard',
          path: '/thumb3.jpg',
          description: 'Real-time weather data with interactive charts, location-based forecasts, and detailed weather analytics for comprehensive weather monitoring.',
          stack: ['JavaScript', 'Chart.js', 'OpenWeather API'],
          github: 'https://github.com/sabbir-ahamed/weather-dashboard',
          live: 'https://weather-dashboard-demo.vercel.app',
        },
        
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import {  Pagination } from 'swiper';

// icons
import {BsArrowRight} from 'react-icons/bs';
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[400px] md:h-[380px] lg:h-[500px] xl:h-[480px]'>
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-3 lg:gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt={image.title} className="w-full h-full object-cover" />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/70 to-black/80 opacity-0 group-hover:opacity-95 transition-all duration-700"></div> 
                    
                    {/* project info overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {/* top section - title and links */}
                      <div className="flex justify-between items-start">
                        <h3 className="text-white font-bold text-base md:text-lg lg:text-xl drop-shadow-lg text-shadow-lg">{image.title}</h3>
                        <div className="flex gap-1 md:gap-2">
                          <a href={image.github} target="_blank" rel="noopener noreferrer" 
                             className="text-white hover:text-accent hover:scale-110 transition-all duration-300 transform drop-shadow-lg">
                            <FaGithub size={16} className="md:w-5 md:h-5" />
                          </a>
                          <a href={image.live} target="_blank" rel="noopener noreferrer"
                             className="text-white hover:text-accent hover:scale-110 transition-all duration-300 transform drop-shadow-lg">
                            <FaExternalLinkAlt size={14} className="md:w-4 md:h-4" />
                          </a>
                        </div>
                      </div>
                      
                      {/* bottom section - description and stack */}
                      <div className="space-y-2 md:space-y-3 lg:space-y-4">
                        <p className="text-white text-xs md:text-sm leading-relaxed drop-shadow-lg font-medium line-clamp-3 md:line-clamp-4">{image.description}</p>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {image.stack.map((tech, techIndex) => (
                            <span key={techIndex} 
                                  className="text-xs bg-white/25 text-white px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/40 hover:bg-accent/40 hover:border-accent/60 hover:text-accent hover:scale-110 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 font-medium drop-shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
                })}
            </div>
              
          </SwiperSlide>
        );
      })}
    </Swiper >
  );

};

export default WorkSlider;
