import React from 'react';
import Typewriter from 'typewriter-effect';

import { VStack } from '@/components/ui/v-stack';

const TypeWritterComp = () => {
  return (
    <VStack className="min-h-full text-2xl font-bold lg:text-4xl" justify={'center'}>
      <Typewriter
        options={{
          strings: ['Front End Developer', 'UI/UX Designer', 'Software Engineer'],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </VStack>
  );
};

export default TypeWritterComp;
