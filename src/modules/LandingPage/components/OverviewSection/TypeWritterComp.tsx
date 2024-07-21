import React from 'react';
import Typewriter from 'typewriter-effect';

import { VStack } from '@/components/ui/v-stack';

const TypeWritterComp = () => {
  return (
    <VStack className="text-2xl font-bold lg:text-4xl" justify={'center'}>
      <span className="relative top-0 flex h-auto w-fit select-auto items-center justify-center bg-white bg-clip-text py-4 text-center text-6xl font-extrabold text-transparent">
        <Typewriter
          options={{
            strings: ['Front End Developer', 'UI/UX Designer', 'Software Engineer'],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </span>
      <div className="absolute mx-auto box-content flex w-fit select-none border bg-white bg-clip-text py-4 text-center text-6xl font-extrabold text-transparent blur-xl">
        <Typewriter
          options={{
            strings: ['Front End Developer', 'UI/UX Designer', 'Software Engineer'],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </VStack>
  );
};

export default TypeWritterComp;
