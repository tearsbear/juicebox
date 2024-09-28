"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/core/Buttons";
import Link from "next/link";
import { Swiper as SwiperType } from "swiper";
import AlertDialog from "@/components/core/AlertDialog";
import CustomSwiper from "@/components/core/CustomSwiper";
import Header from "@/components/core/Header";

const slides = [
  {
    text: "I'll ask you a handful of meaningful questions and compare your responses with people in your industry.",
    buttonText: "Continue",
  },
  {
    text: "You'll get insights into current industry sentiments and a reality check about technology in a few minutes.",
    buttonText: "Continue",
  },
  {
    text: "Ready to dive in? Let's explore how your views align with industry trends.",
    buttonText: "Get started",
  },
];

export default function Walkthrough() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [key, setKey] = useState(0);
  const swiperRef = useRef<SwiperType>();
  const [showAlert, setShowAlert] = useState(false);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleBackClick = () => {
    setShowAlert(true);
  };

  const handleRefreshClick = () => {
    console.log("Refresh clicked");
  };

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-8 bg-black text-white">
      <Header
        onBackClick={handleBackClick}
        onRefreshClick={handleRefreshClick}
      />

      {/* Radial background div */}
      <div className="absolute inset-0 md:h-full w-full radial-bg" />

      {/* Main content */}
      <main className="flex flex-col items-center text-center flex-grow relative w-full">
        <div className="relative w-[146px] h-[155px] mb-5 md:mb-10 z-10 float-animation">
          <Image
            src="/images/vector/hexagon-alt.svg"
            alt="Hexagon illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <CustomSwiper
          slides={slides}
          activeIndex={activeIndex}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          animationKey={key}
        />

        {activeIndex === slides.length - 1 ? (
          <Link
            href="/onboarding"
            className="w-full max-w-[90%] md:max-w-[350px] mt-8"
          >
            <Button variant="secondary" className="w-full">
              {slides[activeIndex].buttonText}
            </Button>
          </Link>
        ) : (
          <Button
            variant="outline"
            className="w-full max-w-[90%] md:max-w-[350px] mt-8"
            onClick={handleNext}
          >
            {slides[activeIndex].buttonText}
          </Button>
        )}
      </main>

      <AlertDialog
        isOpen={showAlert}
        link="/"
        onClose={() => setShowAlert(false)}
      />

      {/* Empty footer for spacing */}
      <footer className="w-full h-8 md:h-16" />
    </div>
  );
}
