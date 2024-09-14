import React from 'react';

import { VStack } from '@/components/ui/v-stack';

const InfoOverview = () => {
  return (
    <VStack className="my-20 text-right text-white">
      <VStack className="pb-12 text-base font-extralight lg:text-xl" spacing={8}>
        <span className="drop-shadow-neon-white">Phan Hoàng Quốc Tú</span>
        <span className="drop-shadow-neon-white">tuphan694@gmail.com</span>
      </VStack>
    </VStack>
  );
};

export default InfoOverview;
