import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getWindowWidth } from "../../../utils/getWindowWidth";

const SwiperSlider = ({
  children,
  lg,
  md,
  sm,
  icon = true,
  autoplay = false,
  slidesPerView,
  className = "",
  fullscreen = false,
  paginationBtn = true,
}) => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update(); // Force Swiper to reinitialize with correct breakpoints
    }
  }, [sm, md, lg]);


  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}
      {icon && (
        <div>
          <div
            ref={navigationPrevRef}
            className={`custom-prev-icon text-[32px] absolute top-[36%] cursor-pointer md:w-[50px] md:h-[50px] w-[40px] h-[40px] bg-[#d4c7c7] rounded-[50%] flex justify-center items-center z-30 hover:bg-black text-white`}
            style={{ left: fullscreen ? "5px" : windowWidth < 768 ? "0px" : "-25px" }}>
            <RiArrowLeftSLine />
          </div>
          <div
            ref={navigationNextRef}
            className={`custom-next-icon text-[32px] absolute top-[36%] cursor-pointer md:w-[50px] md:h-[50px] w-[40px] h-[40px] bg-[#b3b3b3] rounded-[50%] flex justify-center items-center z-30 hover:bg-black text-white`}
            style={{ right: fullscreen ? "5px" : windowWidth < 768 ? "0px" : "-25px" }}
          >
            <RiArrowRightSLine />
          </div>
        </div>
      )}

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        // spaceBetween={30}
        slidesPerView={slidesPerView}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={paginationBtn ? { clickable: true } : undefined}
        loop={true}
        autoplay={
          autoplay
            ? {
              delay: 3000, // Auto-slide every 3 seconds
              disableOnInteraction: false, // Keeps autoplay running after user interaction
            }
            : false
        }
        breakpoints={{
          320: { slidesPerView: sm, spaceBetween: 10 }, // Very small screens
          640: { slidesPerView: sm, spaceBetween: 20 },
          768: { slidesPerView: md, spaceBetween: 30 },
          1024: { slidesPerView: lg, spaceBetween: 40 },
        }}
        onInit={(swiper) => console.log("space:: ", swiper.params.spaceBetween)} // Debug
        className={`${className}`}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { key: index })
        )}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
