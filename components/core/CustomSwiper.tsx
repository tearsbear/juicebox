import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import AnimatedText from "@/components/core/AnimatedText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Slide {
  text: string;
  buttonText: string;
}

interface CustomSwiperProps {
  slides: Slide[];
  activeIndex: number;
  onSwiper: (swiper: SwiperType) => void;
  onSlideChange: (swiper: SwiperType) => void;
  animationKey: number;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  slides,
  activeIndex,
  onSwiper,
  onSlideChange,
  animationKey,
}) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{
        clickable: true,
        bulletActiveClass: "mainColor",
        bulletClass: "swiper-pagination-bullet custom-bullet",
      }}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
      className="w-full flex flex-col"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="flex flex-col h-full">
          <div className="mb-12 text-xl font-sohne max-w-[350px] md:max-w-[420px] mx-auto flex-grow">
            {activeIndex === index && (
              <AnimatedText
                key={`${index}-${animationKey}`}
                text={slide.text}
              />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
