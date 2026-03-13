import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
            src={
              "https://i.ibb.co.com/1Y3G5xKm/vanessa-bucceri-g-Di-Rw-IYAMA8-unsplash.jpg"
            }
            alt="Slide 2"
            className="rounded-lg bg-center bg-cover lg:max-h-125 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://i.ibb.co.com/DDkFYwSK/chris-hardy-H5-Ffv4-I5-ZMI-unsplash.jpg"
            }
            alt="Slide 3"
            className="rounded-lg bg-center bg-cover lg:max-h-125 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://i.ibb.co.com/4wMT3qry/jerry-wang-q-Br-F1yu5-Wys-unsplash.jpg"
            }
            alt="Slide 4"
            className="rounded-lg bg-center bg-cover lg:max-h-125 w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
