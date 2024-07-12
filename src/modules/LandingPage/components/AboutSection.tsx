import React, { type FC } from 'react';

interface Props {
  id: string;
}

const AboutSection: FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      AboutSection
    </div>
  );
};

export default AboutSection;
