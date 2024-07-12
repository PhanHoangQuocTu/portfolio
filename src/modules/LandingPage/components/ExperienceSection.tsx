import React, { type FC } from 'react';

interface Props {
  id: string;
}

const ExperienceSection: FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      ExperienceSection
    </div>
  );
};

export default ExperienceSection;
