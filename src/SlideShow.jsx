import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  const banners = [
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1763467944657_popdes.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1764055016519_luckytelweb.jpg",

  ];

  return (
    <div className="w-full my-3 sm:my-5 rounded-xl overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500 }}
        loop={true}
        className="rounded-xl"
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="banner" className="w-full rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
