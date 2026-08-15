'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { services } from '@/lib/data/services-data';
import { showComingSoon } from '@/lib/utils';

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number>(1);

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? 0 : serviceId);
  };

  return (
    <section id="services" className="py-16 lg:py-24">
      {/* Header Section */}
      <SectionHeader
        title="Our Artificial Intelligence Services"
        description="As one of India's leading AI development companies, SysAlly offers the following services to businesses."
        theme="light"
      />

      <div className="container-responsive">

        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-[60%_40%] items-center mb-12">
          {/* Left Side - Services Diagram Image (60%) */}
          <div className="relative w-full max-w-[715px] mx-auto lg:mx-0">
            <Image
              src="/images/services/services-overview.png"
              alt="AI Services Overview"
              width={715}
              height={715}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>

          {/* Right Side - Service Cards (40%) */}
          <div className="space-y-4">
            {services.map((service) => {
              const isExpanded = expandedService === service.id;

              return (
                <div
                  key={service.id}
                  className="rounded-2xl bg-[#f8f8f8] transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between p-8 text-left transition-colors duration-200 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset"
                  >
                    <h3 className="pr-4 text-lg sm:text-xl lg:text-[22px] font-medium leading-7 sm:leading-8 text-brand-navy-dark">
                      {service.title}
                    </h3>

                    <Image
                      src="/icons/arrows/small-arrow.svg"
                      alt=""
                      width={40}
                      height={40}
                      className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden grid transition-all duration-300 ease-in-out ${isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8">
                        <p className="text-sm sm:text-base lg:text-[15px] font-normal leading-6 sm:leading-7 text-brand-navy">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button onClick={showComingSoon}>
            View all services
          </Button>
        </div>
      </div>
    </section>
  );
}
