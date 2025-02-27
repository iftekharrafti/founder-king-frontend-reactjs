import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../../UI/SwiperSlider/SwiperSlider";

const ThemeOneHeroSection = ({ slides }) => {
  return (
    <SwiperSlider className="h-[300px] md:h-[500px] lg:h-[700px]" lg={1} md={1} sm={1} fullscreen={true} >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover">
            <img
              src={slide.imageUrl}
              alt={slide.imageAlt}
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
        </SwiperSlide>
      ))}
    </SwiperSlider>
  );
};

export default ThemeOneHeroSection;
