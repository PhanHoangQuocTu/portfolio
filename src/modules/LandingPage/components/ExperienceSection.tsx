import React from 'react';

interface Props {
  id: string;
}

const ExperienceSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      ExperienceSection
    </div>
  );
};

export default ExperienceSection;
