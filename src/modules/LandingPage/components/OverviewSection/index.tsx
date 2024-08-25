import React from 'react';

import { VStack } from '@/components/ui/v-stack';
import { Vortex } from '@/components/ui/vortex';

import InfoOverview from './components/InfoOverview';
import OverviewHeading from './components/OverviewHeading';
import TypeWritterComp from './components/TypeWritterComp';

interface Props {
  id: string;
}

const OverviewSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="relative">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        className="flex h-full w-full flex-col items-center justify-center px-2 md:px-10"
      >
        <VStack className="container min-h-screen" justify={'center'}>
          <OverviewHeading />

          <TypeWritterComp />

          <InfoOverview />
        </VStack>
      </Vortex>
    </div>
  );
};

export default OverviewSection;
