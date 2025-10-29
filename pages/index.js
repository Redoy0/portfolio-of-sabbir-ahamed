//next image
import Image from "next/image";
import Head from "next/head";
//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//farmer motion
import { motion, AnimatePresence } from "framer-motion";

//framer motion variants
import { fadeIn } from "../variants";
import { useState, useEffect } from "react";

const titles = [
  "Problem Solver",
  "Tech Enthusiast",
  "Flutter Developer",
  "Web Developer",
];

const titleVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.6, ease: "easeIn" } },
};

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Md. Sabbir Ahamed | Sabbir Ahamed - Best Portfolio for Web Developer</title>
        <meta name="description" content="Welcome to Md. Sabbir Ahamed's best portfolio for web. Explore Sabbir Ahamed's professional web developer portfolio featuring modern web development projects, Flutter apps, and innovative digital solutions." />
        <meta name="keywords" content="Sabbir Ahamed, Md. Sabbir Ahamed, Md Sabbir Ahamed, web developer portfolio, best portfolio for web, best web portfolio, professional web developer, web development showcase" />
        <meta name="msvalidate.01" content="C3093135B0BD4AA33F43CB5F1823862B" />
        <meta name="facebook-domain-verification" content="r15kuvv00nofjnfnw0hsakzvdwznrf" />
        <link rel="canonical" href="https://sabbirahamed.site/" />
      </Head>
      <div className="bg-primary/60 h-full">
        {/* text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 pt-8 sm:pt-8 md:pt-0 lg:pt-0 relative z-20 lg:z-auto pointer-events-auto lg:pointer-events-none">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto px-4 sm:px-6 lg:px-8">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
            <span className="text-white/90 font-light">Hello, I&rsquo;m</span>
            <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-accent bg-clip-text text-transparent font-black tracking-tight">
              Sabbir Ahamed
            </span>
            <br />
            <div className="flex flex-wrap items-baseline justify-center xl:justify-start gap-2 sm:gap-3 mt-3 sm:mt-4">
              <span className="text-white/90 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium leading-none"> a</span>
              <span className="relative inline-flex items-center min-w-[180px] sm:min-w-[200px] h-[1.9rem] sm:h-[2.25rem] md:h-[2.75rem] xl:h-[3.25rem] overflow-hidden py-0.5 sm:py-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTitle}
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-accent font-bold transition-all duration-300 text-lg sm:text-xl md:text-2xl xl:text-3xl leading-none whitespace-nowrap inline-block"
                    style={{ display: "inline-block" }}
                  >
                    {titles[currentTitle]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm sm:max-w-lg xl:max-w-2xl mx-auto xl:mx-0 mb-6 max-h-[900px]:mb-4 sm:mb-8 xl:mb-16 text-white/80 text-sm max-h-[900px]:text-xs sm:text-base md:text-lg xl:text-xl leading-relaxed font-light tracking-wide px-2 sm:px-0">
            I&rsquo;m a <span className="text-accent font-semibold">passionate programmer</span> who enjoys breaking down{" "}
            <span className="text-accent font-semibold">complex problems</span> and crafting{" "}
            <span className="text-accent font-semibold">creative solutions</span> that push the boundaries of what&rsquo;s possible.
          </motion.p>
          {/* Btn */}
          <div className="flex flex-col sm:flex-row items-center justify-center xl:hidden relative gap-3 max-h-[900px]:gap-2 px-4">
            <div className="scale-60 max-h-[900px]:scale-50 sm:scale-75">
              <ProjectsBtn />
            </div>
            <a
              href="/cv/CV_of_Md_Sabbir_Ahamed.pdf"
              download="CV_of_Md_Sabbir_Ahamed.pdf"
              className="group relative inline-flex items-center justify-center px-3 py-1.5 max-h-[900px]:px-2.5 max-h-[900px]:py-1 sm:px-4 sm:py-2 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-accent rounded-full hover:bg-accent hover:text-black text-xs max-h-[900px]:text-[10px] sm:text-sm"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-accent group-hover:translate-x-0 ease">
                <svg className="w-3 h-3 max-h-[900px]:w-2.5 max-h-[900px]:h-2.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-accent transition-all duration-300 transform group-hover:translate-x-full ease text-xs max-h-[900px]:text-[10px] sm:text-sm">
                Download Resume
              </span>
              <span className="relative invisible text-xs max-h-[900px]:text-[10px] sm:text-sm">Download Resume</span>
            </a>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex items-center gap-6 lg:pointer-events-auto relative z-30"
          >
            <div className="lg:pointer-events-auto">
              <ProjectsBtn />
            </div>
            <motion.a
              href="/cv/CV_of_Md_Sabbir_Ahamed.pdf"
              download="CV_of_Md_Sabbir_Ahamed.pdf"
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-accent rounded-full hover:bg-accent hover:text-black text-lg lg:pointer-events-auto"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-accent group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-accent transition-all duration-300 transform group-hover:translate-x-full ease">
                Download Resume
              </span>
              <span className="relative invisible">Download Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full sm:w-[800px] md:w-[1000px] lg:w-[1200px] h-full absolute right-0 bottom-0 overflow-hidden z-10 lg:z-auto pointer-events-none lg:pointer-events-auto">
        {/* bg image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 pointer-events-none'>
        </div>
        {/* particles */}
        <div className="hidden sm:block pointer-events-none lg:pointer-events-auto">
          <ParticlesContainer />
        </div>
        {/* avater Img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[737px] max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[678px] absolute -bottom-20 sm:-bottom-24 md:-bottom-28 lg:bottom-0 left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none lg:right-[8%] pointer-events-none lg:pointer-events-none">
          <Avatar />
        </motion.div>
      </div>

      </div>
    </>
  );
};

export default Home;
