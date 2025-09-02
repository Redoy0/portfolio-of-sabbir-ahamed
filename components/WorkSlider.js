//work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Kechedei',
          path: '/kechedei1.png',
          description: 'Designed and developed a responsive website for a laundry shop to enable customers to explore services, place orders, and track laundry status.',
          stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
          github: 'https://github.com/Redoy0/KecheDei_Project',
          live: 'https://kechedei.byethost7.com/',
        },
        {
          title: 'Portfolio Website',
          path: '/portfolio2.png',
          description: 'Built a sleek, responsive portfolio website to showcase my work, skills, and experience—with smooth navigation and interactive elements for a standout user experience across all devices.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/Redoy0/portfolio-of-sabbir-ahamed',
          live: 'https://sabbir-ahamed-rs.vercel.app/',
        },
        {
          title: 'ScheduLearn',
          path: '/thumb2.jpg',
          description: 'Created a responsive web platform to visualize CPU scheduling algorithms like FCFS, SJF, and Round Robin through interactive real-time simulations.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/Redoy0/schedulearn',
          live: 'https://schedulearn.vercel.app/',
        },
        {
          title: 'NeuvoHomes',
          path: '/thumb4.jpg',
          description: 'Developed a platform for ordering 3D home designs and exploring pre-made home delivery options. The site features a responsive design and a user-friendly ordering system.',
          stack: ['HTML', 'CSS', 'Bootstrap', 'Django'],
          github: 'https://github.com/sabbir-ahamed/neuvo-homes',
          live: 'https://neuvo-homes-demo.vercel.app',
        },

      ],
    },
    {
      images: [
        {
          title: 'DIU LeaderBoard',
          path: '/thumb3.jpg',
          description: 'Created a gamified mobile app for DIU students to track academic rankings, featuring secure login and real-time leaderboard to boost engagement and motivation.',
          stack: ['Flutter', 'Firebase', 'Firestore', 'API'],
          github: 'https://github.com/sabbir-ahamed/diu-leaderboard',
          live: 'https://diu-leaderboard-demo.vercel.app',
        },
        {
          title: 'DIU BusBuddy',
          path: '/thumb4.jpg',
          description: 'Campus bus tracking app for DIU with real-time location, route info, and schedules to help students plan rides efficiently.',
          stack: ['Flutter', 'Firebase', 'Google Maps'],
          github: 'https://github.com/Redoy0/DIU_BusBuddy',
          live: 'https://github.com/Redoy0/DIU_BusBuddy',
        },
        {
          title: 'Responsive CV',
          path: '/projects/responsive_cv.png',
          description: 'Responsive online CV with adaptive layout built using semantic HTML and modern CSS.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/Redoy0/Responsive-CV-Using-Html-Css',
          live: 'https://redoy0.github.io/Responsive-CV-Using-Html-Css/',
        },
        {
          title: 'Political Violence Monitor',
          path: '/thumb3.jpg',
          description: 'Interactive dashboard to track and visualize political violence incidents with filters, charts, and maps for insightful analysis.',
          stack: ['Python', 'Data Visualization', 'Mapping'],
          github: 'https://github.com/Redoy0/political-violence-monitor',
          live: 'https://github.com/Redoy0/political-violence-monitor',
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
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// next image
import Image from 'next/image';

const WorkSlider = () => {
  // Create responsive slides - individual for mobile, grouped for desktop
  const createResponsiveSlides = () => {
    const allProjects = workSlider.slides.flatMap(slide => slide.images);

    // For desktop, group projects into slides of 4
    const desktopSlides = [];
    for (let i = 0; i < allProjects.length; i += 4) {
      desktopSlides.push(allProjects.slice(i, i + 4));
    }

    // For tablets, group projects into slides of 2
    const tabletSlides = [];
    for (let i = 0; i < allProjects.length; i += 2) {
      tabletSlides.push(allProjects.slice(i, i + 2));
    }

    return {
      individual: allProjects.map((project, index) => ({ project, index })),
      tablet: tabletSlides,
      grouped: desktopSlides
    };
  };

  const { individual, tablet, grouped } = createResponsiveSlides();
  return (
    <>
      {/* Mobile view - individual projects */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={15}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className='h-[220px] xs:h-[240px] sm:h-[290px] mb-4 sm:mb-6 max-w-none'
          style={{
            '--swiper-pagination-bottom': '0px',
            '--swiper-pagination-bullet-inactive-color': '#ffffff40',
            '--swiper-pagination-bullet-color': '#e879f9'
          }}>

          {individual.map(({ project, index }) => (
            <SwiperSlide key={`mobile-${index}`}>
              <div className="w-full h-full px-2 sm:px-3">
                <div className="relative rounded-lg overflow-hidden flex items-center justify-center group w-full h-full aspect-video max-w-full shadow-lg">
                  <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                    <Image src={project.path} width={500} height={300} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/70 to-black/80 opacity-0 group-hover:opacity-95 transition-all duration-700 pointer-events-none z-10"></div>

                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-3 xs:p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto group-active:pointer-events-auto">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-white font-bold text-sm xs:text-base sm:text-lg drop-shadow-lg leading-tight flex-1 pr-2">{project.title}</h3>
                        <div className="flex gap-2 flex-shrink-0">
                          <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="text-white hover:text-accent hover:scale-110 transition-all duration-300 transform drop-shadow-lg">
                            <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="text-white hover:text-accent hover:scale-110 transition-all duration-300 transform drop-shadow-lg">
                            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                          </a>

                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-white/90 text-[9px] sm:text-[10px] leading-tight font-light drop-shadow-lg line-clamp-2 sm:line-clamp-3">
                          {project.description.length > 80 ? `${project.description.substring(0, 80)}...` : project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.stack.map((tech, techIndex) => (
                            <span key={techIndex}
                              className="text-[10px] sm:text-xs leading-tight bg-white/25 text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/40 hover:bg-accent/40 hover:border-accent/60 transition-all duration-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tablet view - 2 projects per slide */}
      <div className="hidden md:block lg:hidden">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className='h-[390px] mt-0 mb-2 max-w-none'
          style={{
            '--swiper-pagination-bottom': '0px',
            '--swiper-pagination-bullet-inactive-color': '#ffffff40',
            '--swiper-pagination-bullet-color': '#e879f9'
          }}>

          {tablet.map((projectPair, slideIndex) => (
            <SwiperSlide key={`tablet-${slideIndex}`}>
              <div className="w-full h-full px-3">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {projectPair.map((project, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group w-full h-full aspect-video max-w-full shadow-lg">
                      <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                        <Image src={project.path} width={500} height={300} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/70 to-black/80 opacity-0 group-hover:opacity-95 transition-all duration-700 pointer-events-none z-10"></div>

                        <div className="absolute inset-0 z-20 flex flex-col justify-between p-3 xs:p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto group-active:pointer-events-auto">
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="text-white font-bold text-sm xs:text-base sm:text-lg drop-shadow-lg leading-tight flex-1 pr-2">{project.title}</h3>
                            <div className="flex gap-2 flex-shrink-0">
                              <a href={project.github} target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-accent hover:scale-110 transition-all duration-300 transform drop-shadow-lg">
                                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                              </a>
                              <a href={project.live} target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-accent hover:scale-110 transition-all duration-300 transform drop-shadow-lg">
                                <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                              </a>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <p className="text-white/90 text-[9px] sm:text-[10px] leading-tight font-light drop-shadow-lg line-clamp-2 sm:line-clamp-3">
                              {project.description.length > 80 ? `${project.description.substring(0, 80)}...` : project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {project.stack.map((tech, techIndex) => (
                                <span key={techIndex}
                                  className="text-[10px] sm:text-xs leading-tight bg-white/25 text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/40 hover:bg-accent/40 hover:border-accent/60 transition-all duration-300">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop view - 2x2 grid (2 slides total, 4 projects each) */}
      <div className="hidden lg:block">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            1024: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className='lg:h-[440px] xl:h-[490px] 2xl:h-[540px] mb-4 sm:mb-6 md:mb-8 max-w-none'
          style={{
            '--swiper-pagination-bottom': '0px',
            '--swiper-pagination-bullet-inactive-color': '#ffffff40',
            '--swiper-pagination-bullet-color': '#e879f9'
          }}>

          {grouped.map((projectGroup, slideIndex) => (
            <SwiperSlide key={`desktop-${slideIndex}`}>
              <div className="w-full h-full px-4">
                <div className="grid grid-cols-2 gap-4 xl:gap-6 h-full">
                  {projectGroup.map((project, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden group shadow-2xl hover:shadow-accent/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                      <div className="relative w-full h-full aspect-video">
                        <Image src={project.path} width={500} height={300} alt={project.title} className="w-full h-full object-cover" />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500 pointer-events-none z-10"></div>

                        {/* Enhanced overlay with better positioning */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 xl:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto group-active:pointer-events-auto">
                          {/* Top section */}
                          <div className="flex justify-between items-start gap-3">
                            <h3 className="text-white font-bold text-lg xl:text-xl 2xl:text-2xl drop-shadow-2xl leading-tight flex-1">{project.title}</h3>
                            <div className="flex gap-3 flex-shrink-0">
                              <a href={project.github} target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-accent hover:scale-125 transition-all duration-300 transform drop-shadow-lg p-2 rounded-full bg-white/10 hover:bg-accent/20">
                                <FaGithub className="w-5 h-5 xl:w-6 xl:h-6" />
                              </a>
                              <a href={project.live} target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-accent hover:scale-125 transition-all duration-300 transform drop-shadow-lg p-2 rounded-full bg-white/10 hover:bg-accent/20">
                                <FaExternalLinkAlt className="w-4 h-4 xl:w-5 xl:h-5" />
                              </a>
                            </div>
                          </div>

                          {/* Bottom section */}
                          <div className="space-y-3">
                            <p className="text-white/90 text-xs xl:text-sm leading-relaxed font-light drop-shadow-lg line-clamp-2 xl:line-clamp-3">
                              {project.description.length > 120 ? `${project.description.substring(0, 120)}...` : project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 xl:gap-2.5">
                              {project.stack.slice(0, project.stack.length <= 5 ? project.stack.length : 4).map((tech, techIndex) => (
                                <span key={techIndex}
                                  className="text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/30 hover:bg-accent/30 hover:border-accent/50 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 font-medium drop-shadow-lg whitespace-nowrap max-w-[80px] text-center">
                                  {tech}
                                </span>
                              ))}
                              {project.stack.length > 5 && (
                                <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/30 font-medium drop-shadow-lg max-w-[60px] text-center">
                                  +{project.stack.length - 4}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-30"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div >
    </>
  );

};

export default WorkSlider;
