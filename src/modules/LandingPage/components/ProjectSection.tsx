import React from 'react';

import { type ISectionProps } from '../types';

const ProjectSection: React.FC<ISectionProps> = ({ id }) => {
  return <div id={id} className="relative min-h-screen"></div>;
};

export default ProjectSection;
