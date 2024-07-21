import React from 'react';

import { VStack } from '@/components/ui/v-stack';

const InfoOverview = () => {
  return (
    <VStack className="my-20 border-b border-b-white text-right text-white">
      <VStack className="pb-12 text-xl font-extralight" spacing={8}>
        <span>Phan Hoàng Quốc Tú</span>
        <span>tuphan694@gmail.com</span>
      </VStack>
    </VStack>
  );
};

export default InfoOverview;
