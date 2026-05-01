import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";


// 1. Import core components
import { Swiper, SwiperSlide } from 'swiper/react';
// 2. Import BOTH Navigation and Autoplay modules
import { Autoplay, Navigation } from 'swiper/modules'; 

// 3. Import required CSS files
import 'swiper/css';
import 'swiper/css/navigation'; // Adds default arrow styles

export default function FeaturedGames() {
  return (
    <Swiper
      // 4. Inject both modules here
      modules={[Autoplay, Navigation]}
      
      // Enable arrows
      navigation={true} 
      
      // Set your autoplay settings
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
