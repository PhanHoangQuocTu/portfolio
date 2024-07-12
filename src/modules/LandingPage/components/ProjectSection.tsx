import React, { type FC } from 'react';

interface Props {
  id: string;
}

const ProjectSection: FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      ProjectSection
    </div>
  );
};

export default ProjectSection;
