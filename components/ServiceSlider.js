// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// icons
import {
  RxDesktop,
  RxPencil2,
  RxArrowTopRight,
} from 'react-icons/rx';

// Additional icons for services
import {
  FaCode,
  FaMobile,
  FaBrain,
  FaPaintBrush
} from 'react-icons/fa';

// import required modules
import { FreeMode, Pagination } from 'swiper';

//service data
const serviceData = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Creating responsive, modern web applications using the latest technologies and frameworks.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and seamless user experiences that delight and engage users.',
  },
  {
    icon: <FaMobile />,
    title: 'Flutter Development',
    description: 'Building beautiful, high-performance mobile applications for both iOS and Android platforms.',
  },
  {
    icon: <FaBrain />,
    title: 'Machine Learning',
    description: 'Developing intelligent solutions using machine learning algorithms and data analysis techniques.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper >
  );

};

export default ServiceSlider;
