import React from 'react';

interface Props {
  id: string;
}

const ServiceSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      ServiceSection
    </div>
  );
};

export default ServiceSection;
