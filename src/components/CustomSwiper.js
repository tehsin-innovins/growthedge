import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';
import arrow_left from '../assets/home/arrow_left.svg'; // Import the SVG file
import arrow_right from '../assets/home/arrow_right.svg'; // Import the SVG file

export default ({ slides, spaceBetween, slidesPerView, renderSlide, swiperClassName,swiperClassChildName,swiper_navClass,swiperContainer }) => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const goToSlide = (index) => {
    const totalSlides = slides.length;
    let slideToGo;
    
    if (index === 0) {
      slideToGo = 0; // First slide
    } else if (index === 1) {
      slideToGo = Math.floor(totalSlides / 2); // Middle slide
    } else if (index === 2) {
      slideToGo = totalSlides - 1; // Last slide
    }
    
    swiperRef.current.swiper.slideTo(slideToGo);
  };

  return (
    <div className={swiperContainer}>
      <Swiper
        // Install Swiper modules
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
          el: '.custom-pagination', // Custom pagination element
          renderBullet: (index, className) => {
            if (index === 0 || index === 1 || index === 2) {
              return `<span class="${className}"></span>`; // Show only three bullets
            }
            return '';
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          // Define breakpoints for responsive behavior
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
          },
        }}
        className={swiperClassName} // Pass the dynamic className here
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={swiperClassChildName} key={index}>
            {renderSlide ? renderSlide(slide, index) : slide}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className={swiper_navClass}>
        <img onClick={handlePrev} className="swiper_arrow_left" src={arrow_left} alt="arrow_left" width={25} height={25} />
        
        <div className="custom-pagination">
          {Array.from({ length: 3 }, (_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className="dot">
            </button>
          ))}
        </div>

        <img onClick={handleNext} className="swiper_arrow_right" src={arrow_right} alt="arrow_right" width={25} height={25} />
      </div>
    </div>
  );
};
