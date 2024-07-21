import React from 'react';
import dynamic from 'next/dynamic';

interface Props {
  id: string;
}
const TypeWritterComp = dynamic(() => import('./TypeWritterComp'));

const OverviewSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      <TypeWritterComp />
    </div>
  );
};

export default OverviewSection;
