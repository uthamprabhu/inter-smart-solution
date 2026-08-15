'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import { processSteps, ProcessStep } from '@/lib/data/process-steps';

interface VisibleStep extends ProcessStep {
  originalIndex: number;
}

const WINDOW_SIZE = 4; // Maximum steps shown at once

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = processSteps[activeStep];
  const totalSteps = processSteps.length;

  // Calculate which steps to show based on activeStep
  // If total steps <= WINDOW_SIZE: show all steps
  // If active step is in first window: show first WINDOW_SIZE steps
  // Otherwise: show remaining steps
  const getVisibleSteps = (): VisibleStep[] => {
    if (totalSteps <= WINDOW_SIZE) {
      // Show all steps if total is less than window size
      return processSteps.map((step, idx) => ({ ...step, originalIndex: idx }));
    }
    
    if (activeStep < WINDOW_SIZE) {
      // Show first window (always 4 items)
      return processSteps.slice(0, WINDOW_SIZE).map((step, idx) => ({ 
        ...step, 
        originalIndex: idx 
      }));
    }
    
    // Show remaining steps (3 items for 7 total)
    return processSteps.slice(WINDOW_SIZE).map((step, idx) => ({ 
      ...step, 
      originalIndex: idx + WINDOW_SIZE 
    }));
  };

  const visibleSteps = getVisibleSteps();
  const isInFirstWindow = activeStep < WINDOW_SIZE;

  // Calculate progress line width based on position within visible window
  const getProgressWidth = (): string => {
    if (totalSteps <= WINDOW_SIZE) {
      // Single window: progress linearly through all steps
      return `${((activeStep + 1) / totalSteps) * 100}%`;
    }
    
    if (isInFirstWindow) {
      // First window: progress through WINDOW_SIZE
      return `${((activeStep + 1) / WINDOW_SIZE) * 100}%`;
    }
    
    // Remaining window: progress through remaining steps
    const remainingSteps = totalSteps - WINDOW_SIZE;
    const positionInRemainingWindow = activeStep - WINDOW_SIZE + 1;
    return `${(positionInRemainingWindow / remainingSteps) * 100}%`;
  };

  const handlePrevious = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : totalSteps - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < totalSteps - 1 ? prev + 1 : 0));
  };

  // Always use 4 columns on desktop to prevent wrapping
  const gridColsClass = 'grid-cols-2 sm:grid-cols-4';
  const stepTitleClasses = "text-xs sm:text-sm md:text-base lg:text-[20px] font-medium leading-tight sm:leading-normal lg:leading-8 line-clamp-2";

  return (
    <section id="process" className="bg-brand-navy py-16 lg:py-24">
      <SectionHeader
        title="Our AI Development Process"
        description="Developing an AI solution according to your needs involves a structured approach to assure its success and effectiveness. Our expert AI developers ensure the project's success by following a systematic process in building your artificial intelligence solution."
        theme="dark"
      />

      <div className="container-responsive">
        {/* Navigation Controls */}
        <div className="flex justify-end items-center gap-4 mb-8">
          <div className="flex items-center">
            <button
              onClick={handlePrevious}
              className="w-8 h-8 lg:w-11.75 lg:h-11.75 flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              aria-label="Previous step"
            >
              <Image
                src="/icons/arrows/arrow-left.svg"
                alt=""
                width={47}
                height={47}
                className="w-full h-full"
              />
            </button>
            
            <span className="text-white text-[20px] leading-8 font-medium text-center min-w-12">
              {activeStep + 1}/{totalSteps}
            </span>
            
            <button
              onClick={handleNext}
              className="w-8 h-8 lg:w-11.75 lg:h-11.75 flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              aria-label="Next step"
            >
              <Image
                src="/icons/arrows/arrow-right.svg"
                alt=""
                width={47}
                height={47}
                className="w-full h-full"
              />
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="relative mb-14">
          {/* Progress Line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/20">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: getProgressWidth() }}
            />
          </div>

          {/* Step Labels - Dynamic Window */}
          <div className={`grid gap-2 sm:gap-4 pt-8 ${gridColsClass}`}>
            {visibleSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.originalIndex)}
                className={`text-left transition-all duration-300 ${
                  activeStep === step.originalIndex ? 'text-white' : 'text-white/70'
                }`}
                aria-current={activeStep === step.originalIndex ? 'step' : undefined}
              >
                <h3 className={stepTitleClasses}>{step.title}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-11 items-start">
          {/* Text Card */}
          <div className="w-full md:w-95 [@media(min-width:1280px)]:flex-1 bg-white rounded-lg p-8 md:p-8 lg:p-11 shadow-lg md:shrink-0">
            <div className="text-[20px] font-medium leading-7 text-[#1A1A24] mb-3">
              {currentStep.stepNumber}
            </div>
            <p className="text-[14px] font-normal leading-6 text-[#1A1A24]">
              {currentStep.description}
            </p>
          </div>

          {/* Image */}
          <div className="w-full h-64 sm:h-80 md:w-120 md:h-85 [@media(min-width:1280px)]:w-160 [@media(min-width:1280px)]:h-112.5 relative rounded-lg overflow-hidden shadow-lg md:shrink-0">
            <Image
              src={currentStep.image}
              alt={currentStep.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 480px, 640px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
