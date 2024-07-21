import React from 'react';

interface Props {
  id: string;
}

const AboutSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      AboutSection
    </div>
  );
};

export default AboutSection;
