import React from 'react';

interface Props {
  id: string;
}

const ProjectSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      ProjectSection
    </div>
  );
};

export default ProjectSection;
