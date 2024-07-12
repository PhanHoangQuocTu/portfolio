import React, { type FC } from 'react';

interface Props {
  id: string;
}

const OverviewSection: FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      OverviewSection
    </div>
  );
};

export default OverviewSection;
