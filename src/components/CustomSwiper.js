import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef, useState } from 'react';
import arrow_left from '../assets/home/arrow_left.svg'; // Import the left arrow SVG
import arrow_right from '../assets/home/arrow_right.svg'; // Import the right arrow SVG

export default function CustomSwiper({
  slides,
  spaceBetween,
  slidesPerView,
  renderSlide,
  swiperClassName,
  swiperClassChildName,
  swiper_navClass,
  swiperContainer
}) {
  const swiperRef = useRef(null); // Reference to the Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index

  // Function to navigate to the next slide
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  // Function to navigate to the previous slide
  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  // Function to go to a specific slide (first, middle, last)
  const goToSlide = (index) => {
    const totalSlides = slides.length;
    let slideToGo;

    // Determine which slide to go to based on index
    if (index === 0) {
      slideToGo = 0; // First slide
    } else if (index === 1) {
      slideToGo = Math.floor(totalSlides / 2); // Middle slide
    } else if (index === 2) {
      slideToGo = totalSlides - 1; // Last slide
    }

    // Go to the selected slide and update active index
    swiperRef.current.swiper.slideTo(slideToGo);
    setActiveIndex(slideToGo); // Update active index
  };

  // Calculate dot indices based on total slides
  const getDotIndices = () => {
    const totalSlides = slides.length;
    return [
      0, // First slide index
      Math.floor(totalSlides / 2), // Middle slide index
      totalSlides - 1 // Last slide index
    ];
  };

  const dotIndices = getDotIndices(); // Get the indices for the dots

  return (
    <div className={swiperContainer}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]} // Enable Swiper modules
        spaceBetween={spaceBetween} // Spacing between slides
        slidesPerView={slidesPerView} // Number of slides to show per view
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index on slide change
		breakpoints={{
			320: {
			slidesPerView: 1,
			spaceBetween: 10,
			},
			480: {
			slidesPerView: 1,
			spaceBetween: 20,
			},
			640: {
			slidesPerView: 1,
			spaceBetween: 20,
			},
			768: {
			slidesPerView: 2,
			spaceBetween: 30,
			},
			1024: {
			slidesPerView: 3,
			spaceBetween: 40,
			},
			1280: {
			slidesPerView: slidesPerView,
			spaceBetween: spaceBetween,
			},
			1440: {
			slidesPerView: slidesPerView,
			spaceBetween: spaceBetween,
			},
		}}
        className={swiperClassName}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={swiperClassChildName} key={index}>
            {renderSlide ? renderSlide(slide, index) : slide}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className={swiper_navClass}>
        <img
          onClick={handlePrev}
          className="swiper_arrow_left"
          src={arrow_left}
          alt="Previous Slide"
          width={25}
          height={25}
        />

        {/* Custom Pagination */}
        <div className="custom-pagination">
          {dotIndices.map((dotIndex, idx) => (
            <button
              key={dotIndex}
              onClick={() => goToSlide(idx)} // Go to a specific slide when bullet is clicked
              className={`dot ${activeIndex === dotIndex ? 'active' : ''}`} // Apply 'active' class conditionally
            />
          ))}
        </div>

        <img
          onClick={handleNext}
          className="swiper_arrow_right"
          src={arrow_right}
          alt="Next Slide"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
}
