import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiDart,
  SiFlutter,
  SiCplusplus,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiTensorflow,
  SiC,
} from "react-icons/si";

import {
  BiData,
  BiBrain,
  BiCodeAlt,
  BiCog,
} from "react-icons/bi";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [
          { icon: <FaPython />, name: "Python" },
          { icon: <SiC />, name: "C" },
          { icon: <SiCplusplus />, name: "C++" },
          { icon: <SiDart />, name: "Dart" },
          { icon: <FaJs />, name: "JavaScript" },
        ],
      },
      {
        title: "Technologies",
        icons: [
          { icon: <FaHtml5 />, name: "HTML5" },
          { icon: <FaCss3 />, name: "CSS3" },
          { icon: <FaBootstrap />, name: "Bootstrap" },
          { icon: <SiFlutter />, name: "Flutter" },
          { icon: <FaReact />, name: "React" },
        ],
      },
      {
        title: "Database & Version Control",
        icons: [
          { icon: <FaDatabase />, name: "MySQL" },
          { icon: <FaGitAlt />, name: "Git" },
          { icon: <FaGithub />, name: "GitHub" },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Machine Learning Intern",
        company: "Future Interns",
        type: "Remote",
        description: "Developing machine learning models for real-world data analysis and intelligent problem-solving.",
        technologies: ["Python", "Machine Learning", "Data Analysis"],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "B.Sc in Computer Science and Engineering",
        institution: "Daffodil International University",
        type: "Bachelor's Degree",
        description: "Pursuing comprehensive education in computer science fundamentals, software engineering, and emerging technologies.",
        duration: "Jan 2022 - Present",
        graduation: "Expected Graduation: December 2025",
      },
    ],
  },
];

// component
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// freamer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avater img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 left-[370px]"
      >
        {/* <Avatar /> */}
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center px-4 xl:px-0">
          <motion.h2 variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight sm:leading-relaxed mb-4 sm:mb-6 xl:mb-8 text-center xl:text-left">
            <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent drop-shadow-sm py-1">
              Empowering
            </span>
            <span className="block bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent font-extrabold tracking-wide drop-shadow-lg animate-pulse py-1">
              innovation
            </span>
            <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent drop-shadow-sm py-1">
              through code and design.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm sm:text-base leading-relaxed text-center xl:text-left text-white/90 sm:text-white/80">
            Built a solid foundation in CSE with expertise in programming, problem-solving, and crafting digital solutions. Experienced through internships, coding contests, and a passion for impactful tech.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-6">
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years Coding Experience</div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={600} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Problem Solved
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1'>
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished Projects
                </div>
              </div>

              {/* awards */}
              {/* <div className='relative flex-1 '>
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Wining Awards
                </div>
              </div> */}

            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-auto xl:h-[480px] px-4 xl:px-0">
          <div className="flex gap-x-2 sm:gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 text-sm sm:text-base">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {/* Skills Section - Single Card for All Skills */}
            {aboutData[index].title === 'skills' && (
              <div className="hidden xl:block w-full max-w-md">
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-semibold text-xl">My Skills</h3>
                    <span className="text-accent text-sm bg-accent/20 px-3 py-1 rounded-full">Technologies</span>
                  </div>
                  <div className="space-y-6">
                    {aboutData[index].info.map((skillCategory, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-3">
                        <h4 className="text-accent font-medium text-sm flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></div>
                          {skillCategory.title}
                        </h4>
                        <div className="flex gap-3 flex-wrap pl-5">
                          {skillCategory.icons.map((iconObj, iconIndex) => (
                            <div
                              key={iconIndex}
                              className="text-2xl text-white hover:text-accent transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-3 relative group"
                            >
                              {iconObj.icon}
                              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                {iconObj.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Skills Mobile/Tablet View */}
            {aboutData[index].title === 'skills' && (
              <div className="xl:hidden w-full space-y-4 md:space-y-6 max-w-4xl mx-auto">
                {aboutData[index].info.map((skillCategory, categoryIndex) => (
                  <div key={categoryIndex} className="flex flex-col items-center">
                    <div className="font-light mb-3 text-center text-accent text-sm md:text-base">{skillCategory.title}</div>
                    <div className="flex gap-x-3 md:gap-x-4 flex-wrap justify-center max-w-lg md:max-w-2xl">
                      {skillCategory.icons.map((iconObj, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="text-xl md:text-2xl text-white hover:text-accent transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-3 relative group"
                        >
                          {iconObj.icon}
                          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                            {iconObj.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Other Sections (Experience, Education, Certificates) */}
            {aboutData[index].title !== 'skills' && aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col xl:flex-row max-w-max gap-x-2 items-center text-white/60">

                  {/* Enhanced Cards for Desktop - Experience, Education, Certificates */}
                  {(item.company || item.institution || item.organization) && (
                    <div className="hidden xl:block w-full max-w-md">
                      <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                          <span className="text-accent text-xs bg-accent/20 px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">{item.type}</span>
                        </div>
                        <div className="text-accent font-medium mb-3 flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                          {item.company || item.institution || item.organization}
                        </div>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">{item.description}</p>

                        {/* Experience Technologies */}
                        {item.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-xs bg-white/5 text-white/80 px-2 py-1 rounded-md border border-white/10 hover:border-accent/30 hover:text-accent transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Education Duration & Graduation */}
                        {item.duration && (
                          <div className="flex flex-col gap-1 mt-2">
                            <span className="text-white/60 text-xs">{item.duration}</span>
                            {item.graduation && (
                              <span className="text-accent/80 text-xs italic">{item.graduation}</span>
                            )}
                          </div>
                        )}

                        {/* Certificate Year */}
                        {item.year && (
                          <div className="mt-2">
                            <span className="text-white/60 text-xs bg-white/5 px-2 py-1 rounded">{item.year}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Mobile/Tablet View for all enhanced items */}
                  {(item.company || item.institution || item.organization) && (
                    <div className="xl:hidden flex flex-col items-center text-center max-w-md mx-auto px-4">
                      <div className="font-light mb-2 text-center text-base md:text-lg">{item.title}</div>
                      <div className="text-accent text-sm md:text-base mb-2">{item.company || item.institution || item.organization}</div>
                      {/* Only show description for non-certificate items */}
                      {aboutData[index].title !== 'certificates' && (
                        <div className="text-white/70 text-xs md:text-sm mb-3 leading-relaxed">{item.description}</div>
                      )}
                      {item.year && <div className="text-white/50 text-xs md:text-sm">{item.year}</div>}
                      {item.duration && <div className="text-white/50 text-xs md:text-sm">{item.duration}</div>}
                      {item.technologies && (
                        <div className="flex flex-wrap gap-1 mt-2 justify-center">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-white/5 text-white/80 px-2 py-1 rounded border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
