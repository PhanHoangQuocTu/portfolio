import React from 'react';
import dynamic from 'next/dynamic';

import { VStack } from '@/components/ui/v-stack';

const TypeWritterComp = dynamic(() => import('./TypeWritterComp'));
const InfoOverview = dynamic(() => import('./InfoOverview'));

interface Props {
  id: string;
}

const OverviewSection: React.FC<Props> = ({ id }) => {
  return (
    <div className="relative bg-[#161616]">
      <VStack id={id} className="container min-h-screen" justify={'center'}>
        <TypeWritterComp />

        <InfoOverview />
      </VStack>
    </div>
  );
};

export default OverviewSection;
