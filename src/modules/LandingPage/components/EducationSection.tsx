import React, { type FC } from 'react';

interface Props {
  id: string;
}

const EducationSection: FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      EducationSection
    </div>
  );
};

export default EducationSection;
