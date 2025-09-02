import React, { useEffect, useRef, useState } from "react";

// icons
import { FaAward, FaCertificate, FaTrophy, FaMedal, FaBook, FaExternalLinkAlt, FaListOl, FaFileAlt } from "react-icons/fa";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// components
import Circles from "../../components/Circles";

// Publications data
const publicationsData = [
  {
    title: "publications",
    info: [
      {
        title: "A comprehensive image dataset for the identification of eggplant leaf diseases and computer vision applications",
        authors: "S. Howlader, M. S. Ahamed, M. U. Mojumdar, S. R. H. Noori, et al.",
        journal: "Data in Brief",
        year: "2025",
        volume: "vol. 59, p. 111353",
        doi: "10.1016/j.dib.2025.111353",
        link: "https://doi.org/10.1016/j.dib.2025.111353",
        type: "Research Paper",
        icon: <FaBook />,
      },
    ],
  },
];

// Achievements and Certificates data
const awardsData = [
  {
    title: "awards & certificates",
    info: [
      {
        title: "Web Design & Development",
        organization: "WDD",
        type: "Professional",
        description: "Comprehensive certification covering modern web development practices and design principles.",
        year: "2020",
        icon: <FaCertificate />,
        standingUrl: "",
        certificateUrl: "https://drive.google.com/file/d/1dIkJuo02J_db14wcwLn9dIILQSMXqTlo/view",
      },
      {
        title: "NASA Space Apps Challenge",
        organization: "NASA",
        type: "Hackathon",
        description: "Selected as a National Finalist (Top 50 teams in Bangladesh) in the world's largest annual hackathon.",
        year: "2024",
        icon: <FaTrophy />,
        standingUrl: "",
        certificateUrl: "https://drive.google.com/file/d/1BxhMkzKoPkt-ULkcopLe8gy_gedZv77M/view?usp=sharing",
      },

      {
        title: "Take-Off Programming Contest",
        organization: "14th Place (Slot B), 21st Place(Final",
        type: "Achievement",
        description: "Secured 14th place in Slot B and ranked 21st in the Final Round of the Fall 2022 contest.",
        year: "2022",
        icon: <FaTrophy />,
        standingUrl: "https://toph.co/c/diu-take-off-fall-2022-slot-b/standings",
        certificateUrl: "https://drive.google.com/file/d/13ivKHc318vL7m56K0bQ8KUfI_ifIpgsp/view",
      },
      {
        title: "ICPC Asia Dhaka Regional",
        organization: "ICPC Foundation",
        type: "Contest",
        description: "Participated and competed in the prestigious 2022 International Collegiate Programming Contest (ICPC) preliminary round.",
        year: "2022",
        icon: <FaTrophy />,
        standingUrl: "",
        certificateUrl: "https://drive.google.com/file/d/1CyythJB6yDRY5vpUWiVvvaO_4_jM9sIz/view",
      },

      {
        title: "Take-Off Programming Contest",
        organization: "5th Place",
        type: "Achievement",
        description: "Achieved 5th place among numerous competitors in the Fall 2022 contest.",
        year: "2022",
        icon: <FaTrophy />,
        standingUrl: "https://toph.co/c/diu-take-off-fall-2022-mock/standings",
        certificateUrl: "https://drive.google.com/file/d/13ivKHc318vL7m56K0bQ8KUfI_ifIpgsp/view",
      },
    ],
  },
];

const Achievements = () => {
  const [index, setIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("awards");
  const scrollAreaRef = useRef(null);

  // Combine both data arrays for navigation
  const allSections = [...publicationsData, ...awardsData];
  const currentData = activeSection === "publications" ? publicationsData : awardsData;

  // Always scroll the content area to the top when switching tabs
  useEffect(() => {
    if (scrollAreaRef.current) {
      try {
        // Reset to top; use standard behavior value for compatibility
        scrollAreaRef.current.scrollTo({ top: 0, behavior: "auto" });
      } catch {
        scrollAreaRef.current.scrollTop = 0;
      }
    }
  }, [activeSection]);

  return (
    <div className='min-h-screen bg-primary/30 py-20 md:py-32 text-center xl:text-left overflow-hidden'>
      <Circles />

      <div className='container mx-auto flex flex-col items-center xl:flex-row xl:items-start gap-x-8 gap-y-0 sm:gap-y-2 xl:gap-y-8'>
        {/* title section */}
        <div className="flex-none xl:flex-1 flex flex-col xl:self-center justify-start xl:justify-center px-4 xl:px-0 max-w-xl xl:max-w-none mt-4 sm:mt-4 xl:mt-0 mb-4 sm:mb-4 xl:mb-0">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent drop-shadow-sm py-1">
              Publications &
            </span>
            <span className="block bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent font-extrabold tracking-wide drop-shadow-lg animate-pulse py-1">
              Achievements
            </span>
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 px-2 xl:px-2 text-sm sm:text-base leading-relaxed text-center xl:text-left text-white/90 sm:text-white/80"
          >
            Academic contributions, research publications, and recognition that showcase my expertise and dedication to continuous learning in technology and development.
          </motion.p>

          {/* Achievement stats - Improved spacing and alignment */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-4 xl:mb-8"
          >
            <div className="flex flex-1 gap-4 xl:gap-8 justify-center xl:justify-start">
              {/* Publications */}
              <div className='relative flex-1 max-w-[120px] text-center xl:text-left'>
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-3 flex items-center justify-center xl:justify-start">
                  <FaBook className="mr-2 flex-shrink-0" />
                  1+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] text-white/70'>
                  Research Publications
                </div>
              </div>

              {/* Certificates */}
              <div className='relative flex-1 max-w-[120px] text-center xl:text-left'>
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-3 flex items-center justify-center xl:justify-start">
                  <FaCertificate className="mr-2 flex-shrink-0" />
                  1+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] text-white/70'>
                  Professional Certificates
                </div>
              </div>

              {/* Awards */}
              <div className='relative flex-1 max-w-[120px] text-center xl:text-left'>
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-3 flex items-center justify-center xl:justify-start">
                  <FaTrophy className="mr-2 flex-shrink-0" />
                  4+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] text-white/70'>
                  Contest Achievements
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Publications and Awards display - Fixed height with scrolling */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[55%] h-auto px-4 xl:px-0 xl:self-stretch xl:h-[78vh]"
        >
          {/* Section navigation tabs */}
          <div className="flex gap-x-2 sm:gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-3 sm:mb-4 xl:mb-6 text-sm sm:text-base">
            <div
              className={`${activeSection === "awards" &&
                "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 hover:text-accent transition-colors duration-300`}
              onClick={() => setActiveSection("awards")}
            >
              <FaAward className="inline mr-2" />
              Awards & Certificates
            </div>
            <div
              className={`${activeSection === "publications" &&
                "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 hover:text-accent transition-colors duration-300`}
              onClick={() => setActiveSection("publications")}
            >
              <FaBook className="inline mr-2" />
              Publications
            </div>

          </div>

          {/* Scrollable content area */}
          <div ref={scrollAreaRef} className="max-h-[365px] sm:max-h-[400px] md:max-h-[40vh] xl:max-h-[70vh] xl:flex-1 xl:min-h-0 overflow-y-auto snap-y snap-mandatory xl:snap-none px-2 xl:px-4 py-1 xl:py-2 scrollbar-hover-reveal scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-accent hover:scrollbar-thumb-accent/80">
            {/* Publications Section */}
            {activeSection === "publications" && (
              <div className="py-0 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start">
                {publicationsData[0].info.map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className="flex-1 flex flex-col w-full gap-x-2 items-center text-white/60">
                      {/* Desktop view */}
                      <div className="hidden xl:block w-full max-w-3xl mx-2 xl:mx-3">
                        <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-accent/20 xl:min-h-[260px] flex flex-col overflow-hidden">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start flex-1">
                              <div className="text-accent text-2xl mr-3 mt-1 flex-shrink-0">{item.icon}</div>
                              <div className="flex-1">
                                <div className="text-white font-semibold text-lg leading-tight block">
                                  {item.title}
                                </div>
                              </div>
                            </div>
                            <span className="text-accent text-xs bg-accent/20 px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0 ml-3">{item.type}</span>
                          </div>

                          <div className="text-white/80 text-sm mb-2">{item.authors}</div>
                          <div className="text-accent font-medium mb-2 flex items-center text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                            <em>{item.journal}</em> ({item.year})
                          </div>
                          <div className="text-white/60 text-xs mb-3">{item.volume}</div>
                          <div className="text-xs text-accent/80 mb-4">DOI: {item.doi}</div>

                          {/* Actions */}
                          <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                            <span className="text-white/60 text-xs bg-white/5 px-2 py-1 rounded flex items-center w-fit">
                              <FaMedal className="mr-1 text-accent" />
                              {item.year}
                            </span>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs bg-accent/90 hover:bg-accent text-white px-2.5 py-1.5 rounded-md transition-colors"
                              title="View paper"
                            >
                              <FaExternalLinkAlt className="mr-1" /> Read Paper
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Mobile/Tablet view */}
                      <div className="xl:hidden flex flex-col items-center text-center w-full max-w-md mx-auto px-2 snap-start">
                        <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-4 hover:border-accent/40 transition-all duration-300 w-full">
                          <div className="flex items-center justify-center mb-3">
                            <div className="text-accent text-xl mr-2">{item.icon}</div>
                            <div className="font-light text-base md:text-lg text-center">
                              {item.title}
                            </div>
                          </div>
                          <div className="text-white/70 text-xs md:text-sm mb-2">{item.authors}</div>
                          <div className="text-accent text-xs md:text-sm mb-2"><em>{item.journal}</em> ({item.year})</div>
                          <div className="text-white/60 text-xs mb-2">{item.volume}</div>
                          <div className="text-xs text-accent/80 mb-3">DOI: {item.doi}</div>

                          <div className="flex items-center justify-between gap-2 text-xs md:text-sm mt-1">
                            <span className="flex items-center text-white/60 bg-white/5 px-2 py-1 rounded">
                              <FaMedal className="mr-1 text-accent" /> {item.year}
                            </span>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-accent/90 hover:bg-accent text-white px-2 py-1 rounded-md transition-colors"
                            >
                              <FaExternalLinkAlt className="mr-1" /> View Paper
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Awards & Certificates Section */}
            {activeSection === "awards" && (
              <div className="py-0 grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-6">
                {awardsData[0].info.map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className="flex flex-col text-white/60 h-full">
                      {/* Desktop view */}
                      <div className="hidden xl:block w-full">
                        <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-accent/20 h-full flex flex-col xl:min-h-[260px] overflow-hidden mx-2 xl:mx-3">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center flex-1">
                              <div className="text-accent text-2xl mr-3 flex-shrink-0">{item.icon}</div>
                              <h3 className="text-white font-semibold text-base leading-tight">{item.title}</h3>
                            </div>
                            <span className="text-accent text-xs bg-accent/20 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0 ml-2">{item.type}</span>
                          </div>

                          <div className="text-accent font-medium mb-3 flex items-center text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                            {item.organization}
                          </div>

                          <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1">{item.description}</p>

                          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 gap-y-2 pt-2">
                            <span className="text-white/60 text-xs bg-white/5 px-2 py-1 rounded flex items-center w-fit">
                              <FaMedal className="mr-1 text-accent" />
                              {item.year}
                            </span>
                            <div className="flex items-center gap-2">
                              {item.standingUrl ? (
                                <a
                                  href={item.standingUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-xs bg-white/10 hover:bg-white/20 text-white px-2.5 py-1.5 rounded-md transition-colors"
                                  title="View standing/ranking"
                                >
                                  <FaListOl className="mr-1" /> Standing
                                </a>
                              ) : (
                                <button
                                  className="inline-flex items-center text-xs bg-white/5 text-white/40 px-2.5 py-1.5 rounded-md cursor-not-allowed"
                                  title="Standing not available"
                                  disabled
                                >
                                  <FaListOl className="mr-1" /> Standing
                                </button>
                              )}

                              {item.certificateUrl ? (
                                <a
                                  href={item.certificateUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-xs bg-accent/90 hover:bg-accent text-white px-2.5 py-1.5 rounded-md transition-colors"
                                  title="View certificate"
                                >
                                  <FaFileAlt className="mr-1" /> Certificate
                                </a>
                              ) : (
                                <button
                                  className="inline-flex items-center text-xs bg-white/5 text-white/40 px-2.5 py-1.5 rounded-md cursor-not-allowed"
                                  title="Certificate not available"
                                  disabled
                                >
                                  <FaFileAlt className="mr-1" /> Certificate
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile/Tablet view */}
                      <div className="xl:hidden flex flex-col items-center text-center w-full max-w-md mx-auto px-2 snap-start">
                        <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-4 hover:border-accent/40 transition-all duration-300 w-full">
                          <div className="flex items-center justify-center mb-3">
                            <div className="text-accent text-xl mr-2">{item.icon}</div>
                            <div className="font-light text-base md:text-lg text-center">{item.title}</div>
                          </div>
                          <div className="text-accent text-sm md:text-base mb-2">{item.organization}</div>
                          <div className="text-white/70 text-xs md:text-sm mb-3 leading-relaxed">{item.description}</div>
                          <div className="flex flex-wrap items-center justify-between gap-2 gap-y-2 text-xs md:text-sm mt-1">
                            <span className="flex items-center text-white/60 bg-white/5 px-2 py-1 rounded">
                              <FaMedal className="mr-1 text-accent" /> {item.year}
                            </span>
                            <div className="flex items-center gap-2">
                              {item.standingUrl ? (
                                <a
                                  href={item.standingUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded-md transition-colors"
                                >
                                  <FaListOl className="mr-1" /> Stands
                                </a>
                              ) : (
                                <button className="inline-flex items-center bg-white/5 text-white/40 px-2 py-1 rounded-md cursor-not-allowed" disabled>
                                  <FaListOl className="mr-1" /> Stands
                                </button>
                              )}
                              {item.certificateUrl ? (
                                <a
                                  href={item.certificateUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center bg-accent/90 hover:bg-accent text-white px-2 py-1 rounded-md transition-colors"
                                >
                                  <FaFileAlt className="mr-1" /> Certificate
                                </a>
                              ) : (
                                <button className="inline-flex items-center bg-white/5 text-white/40 px-2 py-1 rounded-md cursor-not-allowed" disabled>
                                  <FaFileAlt className="mr-1" /> Certificate
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
