import React from 'react';
import dynamic from 'next/dynamic';

import { HStack } from '@/components/ui/h-stack';

interface Props {
  id: string;
}
const TypeWritterComp = dynamic(() => import('./TypeWritterComp'));

const OverviewSection: React.FC<Props> = ({ id }) => {
  return (
    <div className="bg-gradient-to-b from-[#449294] via-[#161616] to-[#161616]">
      <HStack id={id} className="container min-h-screen" align={'center'}>
        <TypeWritterComp />
      </HStack>
    </div>
  );
};

export default OverviewSection;
