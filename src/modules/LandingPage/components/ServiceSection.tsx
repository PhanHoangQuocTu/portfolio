import React, { type FC } from 'react';

interface Props {
  id: string;
}

const ServiceSection: FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      ServiceSection
    </div>
  );
};

export default ServiceSection;
