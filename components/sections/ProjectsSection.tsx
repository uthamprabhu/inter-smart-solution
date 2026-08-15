'use client';

import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { showComingSoon } from '@/lib/utils';

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-16 lg:py-24 overflow-hidden">
      {/* Header Section - Stays within container */}
      <SectionHeader
        title="Our Recent AI Projects"
        description="As one of India's leading AI development companies, SysAlly offers the following services to businesses."
        theme="light"
      />

      {/* Projects Container - No left/right margins, only bottom margin */}
      <div className="w-full mb-4">
        {/* Inner flex container with justify-end - pushes images to the right */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 lg:gap-8 md:justify-end px-4 md:px-0">
          {/* Left Image - Project 01 */}
          <Image
            src="/images/projects/project-01.png"
            alt="AI Project showcasing machine learning implementation"
            width={700}
            height={500}
            className="w-full md:w-125 lg:w-187.5 h-auto"
            priority
          />

          {/* Right Image - Project 02 */}
          <Image
            src="/images/projects/project-02.png"
            alt="AI Project demonstrating natural language processing"
            width={500}
            height={400}
            className="w-full md:w-95 lg:w-137.5 h-auto"
          />
        </div>
      </div>

      {/* View All Projects Button - Centered within container */}
      <div className="container-responsive">
        <div className="text-center pt-8">
          <Button onClick={showComingSoon}>
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
}
