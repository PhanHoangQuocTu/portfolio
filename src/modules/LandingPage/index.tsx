'use client';

import React from 'react';
import { SECTION_ID_LIST } from '@/routes';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import OverviewSection from './components/OverviewSection';
import ProjectSection from './components/ProjectSection';
import ServiceSection from './components/ServiceSection';
import SkillSection from './components/SkillSection';

const LandingPage = () => {
  useIntersectionObserver({
    ids: SECTION_ID_LIST,
  });

  return (
    <div>
      <OverviewSection />
      <AboutSection />
      <ServiceSection />
      <SkillSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
