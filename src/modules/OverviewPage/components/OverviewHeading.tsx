import React from 'react';

import { VStack } from '@/components/ui/v-stack';

const OverviewHeading = () => {
  return (
    <VStack className="flex-1 text-5xl font-bold lg:items-start lg:text-7xl" align={'center'} justify={'center'}>
      <span className="drop-shadow-neon-white w-fit py-4 text-center text-white">Portfolio</span>
    </VStack>
  );
};

export default OverviewHeading;
