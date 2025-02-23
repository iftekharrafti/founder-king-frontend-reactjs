import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../../UI/SwiperSlider/SwiperSlider";

const ThemeTwoHeroSection = ({ slides }) => {
  return (
    <SwiperSlider className="h-[70vh]" lg={1} md={1} sm={1} fullscreen={true}>
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
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

export default ThemeTwoHeroSection;
