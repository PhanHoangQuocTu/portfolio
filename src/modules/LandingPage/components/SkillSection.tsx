import React, { type FC } from 'react';

interface Props {
  id: string;
}

const SkillSection: FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      SkillSection
    </div>
  );
};

export default SkillSection;
