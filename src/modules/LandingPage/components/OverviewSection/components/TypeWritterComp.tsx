import React from 'react';
import Typewriter from 'typewriter-effect';

import { VStack } from '@/components/ui/v-stack';

import { getTypeWritterOptions } from '../../../utils/const';

const TypeWritterComp = () => {
  return (
    <VStack className="flex-1 text-3xl font-bold lg:items-start lg:text-5xl" align={'center'} justify={'center'}>
      <span className="drop-shadow-neon-white w-fit py-4 text-center text-white">
        <Typewriter options={getTypeWritterOptions()} />
      </span>
    </VStack>
  );
};

export default TypeWritterComp;
