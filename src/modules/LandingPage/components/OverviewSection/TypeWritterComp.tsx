import React from 'react';
import Typewriter from 'typewriter-effect';

import { VStack } from '@/components/ui/v-stack';

import { getTypeWritterOptions } from '../../utils/const';

const TypeWritterComp = () => {
  return (
    <VStack className="flex-1 text-4xl font-bold lg:text-6xl" justify={'center'}>
      <span className="relative w-fit bg-white bg-clip-text py-4 font-extrabold text-transparent">
        <Typewriter options={getTypeWritterOptions()} />
      </span>

      <div className="absolute w-fit select-none border bg-white bg-clip-text py-4 text-center font-extrabold text-transparent blur-xl">
        <Typewriter options={getTypeWritterOptions()} />
      </div>
    </VStack>
  );
};

export default TypeWritterComp;
