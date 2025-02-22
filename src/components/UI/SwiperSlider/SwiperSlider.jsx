import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = ({
  children,
  lg,
  md,
  sm,
  icon = true,
  autoplay = false,
  slidesPerView = 1
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl =
        navigationPrevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl =
        navigationNextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}
      {icon && (
        <div>
          <div
            ref={navigationPrevRef}
            className="custom-prev-icon text-[32px] absolute top-[36%] left-[-25px] cursor-pointer w-[50px] h-[50px] bg-[#b3b3b3] rounded-[50%] flex justify-center items-center z-30 hover:bg-black text-white"
          >
            <RiArrowLeftSLine />
          </div>
          <div
            ref={navigationNextRef}
            className="custom-next-icon text-[32px] absolute top-[36%] right-[-25px] cursor-pointer w-[50px] h-[50px] bg-[#b3b3b3] rounded-[50%] flex justify-center items-center z-30 hover:bg-black text-white"
          >
            <RiArrowRightSLine />
          </div>
        </div>
      )}

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        // slidesPerView={slidesPerView}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{ clickable: true }}
        autoplay={
          autoplay
            ? {
                delay: 3000, // Auto-slide every 3 seconds
                disableOnInteraction: false, // Keeps autoplay running after user interaction
              }
            : false
        }
        breakpoints={{
          640: { slidesPerView: sm },
          768: { slidesPerView: md },
          1024: { slidesPerView: lg },
        }}
        className="py-8"
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { key: index })
        )}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
