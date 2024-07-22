import React from 'react';
import Image from 'next/image';

import { HStack } from '@/components/ui/h-stack';

const Avatar = () => {
  return (
    <HStack className="inline-flex" pos={'center'}>
      <span className="relative z-10 h-52 w-52 overflow-hidden rounded-full bg-white bg-clip-text py-4 text-center text-transparent">
        <Image
          src={'/images/avatar.webp'}
          alt="avatar"
          fill
          unoptimized
          quality={100}
          priority
          className="scale-[1.35] rounded-full object-cover"
        />
      </span>

      <div className="absolute h-64 w-64 select-none border bg-[#442932] bg-clip-text blur-xl">
        <div className="absolute h-64 w-64 rounded-full bg-[#442932]" />
      </div>
    </HStack>
  );
};

export default Avatar;
