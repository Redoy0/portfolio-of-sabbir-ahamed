//next image
import Image from "next/image";
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
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
	exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

const Home = () => {
	const [currentTitle, setCurrentTitle] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTitle((prev) => (prev + 1) % titles.length);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1 
		        variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
			      className="h1 leading-tight">
            <span className="text-white/90">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-accent via-accent to-red-400 bg-clip-text text-transparent font-bold text-6xl xl:text-7xl">
              Sabbir Ahamed
            </span>
            <br />
            <div className="flex items-baseline justify-center xl:justify-start gap-2">
              <span className="text-white/80 text-3xl xl:text-4xl font-light">
                I'm a
              </span>
              <span className="relative inline-block min-w-[300px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTitle}
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent font-bold text-3xl xl:text-4xl px-2 py-1 rounded-lg transition-colors duration-300"
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
		  className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white/80 text-lg leading-relaxed font-light">
            <span className="text-accent font-semibold">Passionate programmer</span> and{" "}
            <span className="text-secondary font-semibold">creative problem solver</span>{" "}
            who transforms complex challenges into elegant solutions. I believe in pushing the boundaries of what's possible through{" "}
            <span className="text-accent font-semibold">innovative technology</span> and{" "}
            <span className="text-secondary font-semibold">thoughtful design</span>.
          </motion.p>
          {/* Btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute  mix-blend-color-dodge
         translate-z-0'>
          </div>
          {/* particles */}
          <ParticlesContainer />
          {/* avater Img */}
          <motion.div 
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden" 
            transition={{duration:1, ease: "easeInOut"}}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
            <Avatar />
          </motion.div>

        </div>

      </div>
  );
};

export default Home;
