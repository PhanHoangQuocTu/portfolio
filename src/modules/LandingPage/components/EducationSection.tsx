import React from 'react';

interface Props {
  id: string;
}

const EducationSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      EducationSection
    </div>
  );
};

export default EducationSection;
