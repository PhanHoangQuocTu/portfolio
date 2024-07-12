'use client';

import React from 'react';
import { SECTION_ID, SECTION_ID_LIST } from '@/routes';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import OverviewSection from './components/OverviewSection';
import ProjectSection from './components/ProjectSection';
import ServiceSection from './components/ServiceSection';
import SkillSection from './components/SkillSection';

// const AboutSection = dynamic(() => import('./components/AboutSection'));
// const ContactSection = dynamic(() => import('./components/ContactSection'));
// const EducationSection = dynamic(() => import('./components/EducationSection'));
// const ExperienceSection = dynamic(() => import('./components/ExperienceSection'));
// const OverviewSection = dynamic(() => import('./components/OverviewSection'));
// const ProjectSection = dynamic(() => import('./components/ProjectSection'));
// const ServiceSection = dynamic(() => import('./components/ServiceSection'));
// const SkillSection = dynamic(() => import('./components/SkillSection'));

const LandingPage = () => {
  useIntersectionObserver({
    ids: SECTION_ID_LIST,
  });

  return (
    <div>
      <OverviewSection id={SECTION_ID.OVERVIEW} />
      <AboutSection id={SECTION_ID.ABOUT} />
      <ServiceSection id={SECTION_ID.SERVICES} />
      <SkillSection id={SECTION_ID.SKILL} />
      <EducationSection id={SECTION_ID.EDUCATION} />
      <ExperienceSection id={SECTION_ID.EXPERIENCE} />
      <ProjectSection id={SECTION_ID.PROJECT} />
      <ContactSection id={SECTION_ID.CONTACT} />
    </div>
  );
};

export default LandingPage;
