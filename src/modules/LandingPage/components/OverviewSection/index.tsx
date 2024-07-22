import React from 'react';
import dynamic from 'next/dynamic';

import { VStack } from '@/components/ui/v-stack';

const TypeWritterComp = dynamic(() => import('./components/TypeWritterComp'));
const InfoOverview = dynamic(() => import('./components/InfoOverview'));
const OverviewHeading = dynamic(() => import('./components/OverviewHeading'));

interface Props {
  id: string;
}

const OverviewSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="relative bg-gradient-to-b from-[#469196] via-[#1828299f] to-[#161616]">
      <VStack className="container min-h-screen" justify={'center'}>
        <OverviewHeading />

        <TypeWritterComp />

        <InfoOverview />
      </VStack>
    </div>
  );
};

export default OverviewSection;
