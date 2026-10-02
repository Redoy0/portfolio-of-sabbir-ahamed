// Page section: anchor target for the nav plus the shared content container
const Section = ({ id, className = '', decoration, children }) => {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      {decoration}
      <div className='container mx-auto px-4 sm:px-6 xl:px-20 relative z-20'>{children}</div>
    </section>
  );
};

export default Section;
