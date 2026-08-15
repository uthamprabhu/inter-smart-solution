'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroSlides } from '@/lib/data/hero-slides';

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

export default function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentSlide = heroSlides[activeSlideIndex];
  const totalSlides = heroSlides.length;

  // Auto-advance to next slide
  const goToNextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlideIndex((prev) => (prev + 1) % totalSlides);
      setIsTransitioning(false);
    }, 300); // 300ms fade out, then change content
  }, [totalSlides]);

  // Auto-play effect
  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(goToNextSlide, AUTO_PLAY_INTERVAL);

    return () => clearInterval(intervalId);
  }, [isPaused, goToNextSlide]);

  // Handle manual slide selection
  const handleSlideClick = (index: number) => {
    if (index === activeSlideIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlideIndex(index);
      setIsTransitioning(false);
    }, 300);
    
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlide.backgroundImage}
          alt="AI Development Visualization"
          fill
          className="object-cover object-right sm:object-[75%] lg:object-right"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content Container */}
      <div className="relative container-responsive h-screen flex flex-col justify-center">
        <div className="pt-15">
          {/* Hero Content */}
          <article className={`text-white space-y-5 lg:space-y-6 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            <h1 className="max-w-200 text-4xl sm:text-5xl lg:text-[60px] font-semibold leading-tight sm:leading-tight lg:leading-18 text-white/88">
              {currentSlide.title}
            </h1>
            
            <p className="max-w-2xl text-base font-normal leading-6 text-white">
              {currentSlide.description}
            </p>

            <a
              href="#contact"
              className="inline-flex px-8 py-3.5 bg-white text-brand-navy rounded-full text-base font-medium leading-6 hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {currentSlide.ctaText}
            </a>
          </article>
        </div>
      </div>

      {/* Carousel Dots - Bottom Center */}
      <nav
        className="absolute bottom-6 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
        aria-label="Slide navigation"
      >
        <div className="flex items-center justify-center gap-1">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeSlideIndex
                  ? 'w-2 h-2 bg-brand-navy'
                  : 'w-2 h-2 bg-[#d9d9d9]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlideIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </nav>
    </section>
  );
}
