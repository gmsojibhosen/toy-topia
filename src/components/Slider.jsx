import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import slide1 from "../assets/slider_1.jpg";
import slide2 from "../assets/slider_2.jpg";
import slide3 from "../assets/slider_3.jpg";
import slide4 from "../assets/slider_4.jpg";

const Slider = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src={slide1}
            alt="Slide 1"
            className="rounded-lg bg-center bg-cover max-h-140 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt="Slide 2"
            className="rounded-lg bg-center bg-cover max-h-140 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt="Slide 3"
            className="rounded-lg bg-center bg-cover max-h-140 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4}
            alt="Slide 3"
            className="rounded-lg bg-center bg-cover max-h-140 w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
