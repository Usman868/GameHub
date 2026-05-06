import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

export default function FeaturedGames() {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      
      navigation={true} 
      
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: true, 
      }}
      loop={true} 
      spaceBetween={20}
      slidesPerView={1}
      className="mySwiper" // Optional: for custom styling
    >
      <SwiperSlide>🎮 Game 1</SwiperSlide>
      <SwiperSlide>🕹️ Game 2</SwiperSlide>
      <SwiperSlide>🎯 Game 3</SwiperSlide>
    </Swiper>
  );
}
