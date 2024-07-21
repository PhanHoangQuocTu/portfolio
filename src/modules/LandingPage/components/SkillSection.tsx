import React from 'react';

interface Props {
  id: string;
}

const SkillSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      SkillSection
    </div>
  );
};

export default SkillSection;
