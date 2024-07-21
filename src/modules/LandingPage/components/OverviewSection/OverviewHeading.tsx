import React from 'react';

import { VStack } from '@/components/ui/v-stack';

const OverviewHeading = () => {
  return (
    <VStack className="flex-1 text-4xl font-bold lg:items-start lg:text-7xl" align={'center'} justify={'center'}>
      <span className="relative w-fit bg-white bg-clip-text py-4 text-center text-transparent">Portfolio</span>

      <div className="absolute w-fit select-none border bg-white bg-clip-text py-4 text-center text-transparent blur-xl">
        Portfolio
      </div>
    </VStack>
  );
};

export default OverviewHeading;
