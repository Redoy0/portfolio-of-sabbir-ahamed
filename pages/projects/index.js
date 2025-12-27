import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Circles from '../../components/Circles';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Project data
const projects = [
  {
    id: 1,
    title: 'Velocity Courier',
    path: '/velocity-agent.png',
    description: 'A comprehensive courier and delivery management system designed to streamline package tracking, shipment scheduling, and real-time delivery updates for enhanced customer experience.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Redoy0/Velocity-Courier',
    live: 'https://velocity-courier.netlify.app',
  },
  {
    id: 2,
    title: 'Litaria',
    path: '/Litaria-en.png',
    description: 'An innovative art platform connecting artists and art enthusiasts, featuring an intuitive gallery showcase, interactive exhibitions, and seamless art discovery experience.',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'API'],
    github: 'https://github.com/Redoy0/litaria',
    live: 'https://litaria.art/',
  },
  {
    id: 3,
    title: 'Bitstream',
    path: '/bitstream.png',
    description: 'A modern streaming and content delivery platform offering seamless video streaming, live broadcasting capabilities, and robust content management for creators and audiences.',
    stack: ['React', 'Node.js', 'WebRTC', 'MongoDB', 'AWS'],
    github: 'https://github.com/bitstreamofficial/bitstream',
    live: 'https://bitstreamhq.com/',
  },
  {
    id: 4,
    title: 'UniRide',
    path: '/uniride.jpg',
    description: 'A comprehensive ride-sharing mobile application for university students, featuring real-time ride matching, secure payment integration, and live GPS tracking for safe and convenient campus transportation.',
    stack: ['Flutter', 'Firebase', 'Google Maps', 'Payment Gateway'],
    github: 'https://github.com/Redoy0/uniride',
    live: 'https://play.google.com/store/apps/details?id=com.asterisks.unirid',
    isPlayStore: true,
  },
   {
    id: 5,
    title: 'Portfolio Website',
    path: '/portfolio2.png',
    description: 'Built a sleek, responsive portfolio website to showcase my work, skills, and experience—with smooth navigation and interactive elements for a standout user experience across all devices.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Redoy0/portfolio-of-sabbir-ahamed',
    live: 'https://sabbirahamed.site/',
  },
  {
    id: 6,
    title: 'Kechedei',
    path: '/kechedei1.png',
    description: 'Designed and developed a responsive website for a laundry shop to enable customers to explore services, place orders, and track laundry status.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
    github: 'https://github.com/Redoy0/KecheDei_Project',
    live: 'https://github.com/Redoy0/KecheDei_Project',
  },
 
  {
    id: 7,
    title: 'ScheduLearn',
    path: '/thumb2.jpg',
    description: 'Created a responsive web platform to visualize CPU scheduling algorithms like FCFS, SJF, and Round Robin through interactive real-time simulations.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Redoy0/schedulearn',
    live: 'https://schedulearn.vercel.app/',
  },
  {
    id: 8,
    title: 'NeuvoHomes',
    path: '/thumb4.jpg',
    description: 'Developed a platform for ordering 3D home designs and exploring pre-made home delivery options. The site features a responsive design and a user-friendly ordering system.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'Django'],
    github: 'https://github.com/Redoy0/NuevoHomes',
    live: 'https://github.com/Redoy0/NuevoHomes',
  },
  {
    id: 9,
    title: 'DIU LeaderBoard',
    path: '/thumb3.jpg',
    description: 'Created a gamified mobile app for DIU students to track academic rankings, featuring secure login and real-time leaderboard to boost engagement and motivation.',
    stack: ['Flutter', 'Firebase', 'Firestore', 'API'],
    github: 'https://github.com/Redoy0/DIU_LeaderBoard',
    live: 'https://github.com/Redoy0/DIU_LeaderBoard',
  },
  {
    id: 10,
    title: 'DIU BusBuddy',
    path: '/thumb4.jpg',
    description: 'Campus bus tracking app for DIU with real-time location, route info, and schedules to help students plan rides efficiently.',
    stack: ['Flutter', 'Firebase', 'Google Maps'],
    github: 'https://github.com/Redoy0/DIU_BusBuddy',
    live: 'https://github.com/Redoy0/DIU_BusBuddy',
  },
  {
    id: 11,
    title: 'Responsive CV',
    path: '/projects/responsive_cv.png',
    description: 'Responsive online CV with adaptive layout built using semantic HTML and modern CSS.',
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/Redoy0/Responsive-CV-Using-Html-Css',
    live: 'https://redoy0.github.io/Responsive-CV-Using-Html-Css/',
  },
  {
    id: 12,
    title: 'Political Violence Monitor',
    path: '/thumb3.jpg',
    description: 'Interactive dashboard to track and visualize political violence incidents with filters, charts, and maps for insightful analysis.',
    stack: ['Python', 'Data Visual', 'Mapping'],
    github: 'https://github.com/Redoy0/political-violence-monitor',
    live: 'https://github.com/Redoy0/political-violence-monitor',
  },
];

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects - Sabbir Ahamed - Web Development Portfolio & Work</title>
        <meta name="description" content="Sabbir Ahamed's projects and portfolio - Explore web development work by Sabbir Ahamed including modern web applications, Flutter apps, and innovative solutions. View Sabbir Ahamed's professional portfolio at sabbirahamed.site" />
        <meta name="keywords" content="Sabbir Ahamed projects, Md. Sabbir Ahamed portfolio, Sabbir Ahamed DIU, Sabbir DIU, web developer portfolio, Flutter applications, web development, Daffodil International University projects" />
        <meta property="og:title" content="Projects - Sabbir Ahamed - Web Development Portfolio & Work" />
        <meta property="og:description" content="View Sabbir Ahamed's web development projects and portfolio showcasing modern applications and innovative solutions." />
        <link rel="canonical" href="https://sabbirahamed.site/projects" />
      </Head>
      
      <div className='h-screen overflow-y-auto bg-primary/30 py-16 md:py-24 lg:py-28'>
        <Circles />
        
        <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl'>
          {/* Header Section */}
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-center mb-12 md:mb-16 lg:mb-20 mt-10'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6'>
              My <span className='text-accent'>Projects</span>
            </h1>
            <p className='text-white/80 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4'>
              Explore my portfolio featuring a diverse range of innovative projects—spanning cutting-edge web development, 
              real-time mobile apps, machine learning integrations, and impactful digital solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className='space-y-8 md:space-y-12 lg:space-y-16'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn('up', 0.1 * (index % 3))}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.1 }}
                className='group'>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 md:gap-8 lg:gap-10 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 shadow-2xl hover:shadow-accent/20 hover:-translate-y-2`}>
                  
                  {/* Image Section */}
                  <div className='lg:w-1/2 relative overflow-hidden'>
                    <div className='relative h-64 md:h-80 lg:h-96 w-full'>
                      <Image 
                        src={project.path} 
                        alt={project.title}
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500'></div>
                      
                      {/* Project Number Badge */}
                      <div className='absolute top-4 left-4 md:top-6 md:left-6 bg-accent/90 text-white font-bold text-sm md:text-base px-3 md:px-4 py-1 md:py-2 rounded-full backdrop-blur-sm'>
                        #{String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className='lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 group-hover:text-accent transition-colors duration-300'>
                      {project.title}
                    </h2>
                    
                    <p className='text-white/80 text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed'>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className='mb-6 md:mb-8'>
                      <h3 className='text-white/60 text-xs md:text-sm font-semibold uppercase tracking-wider mb-3'>Tech Stack</h3>
                      <div className='flex flex-wrap gap-2 md:gap-3'>
                        {project.stack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-3 md:px-4 py-1.5 md:py-2 bg-white/10 hover:bg-accent/20 border border-white/20 hover:border-accent/50 rounded-lg text-white text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105'>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-3 md:gap-4'>
                      <a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-accent hover:bg-accent/80 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 text-sm md:text-base'>
                        <FaExternalLinkAlt className='text-sm md:text-base' />
                        <span>{project.isPlayStore ? 'Play Store' : 'Live Demo'}</span>
                      </a>
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm md:text-base'>
                        <FaGithub className='text-base md:text-lg' />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='text-center mt-16 md:mt-20 lg:mt-24 pb-8'>
            <p className='text-white/70 text-base md:text-lg mb-4 md:mb-6'>
              Interested in working together?
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-accent hover:bg-accent/80 text-white rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:scale-105 text-sm md:text-base'>
              Let&apos;s Connect
              <FaExternalLinkAlt />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
