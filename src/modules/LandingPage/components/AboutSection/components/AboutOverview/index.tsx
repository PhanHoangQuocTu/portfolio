import React from 'react';

import { HStack } from '@/components/ui/h-stack';

import AboutText from './AboutText';
import Avatar from './Avatar';

const AboutOverview = () => {
  return (
    <HStack spacing={20} pos={'apart'}>
      <Avatar />

      <AboutText />
    </HStack>
  );
};

export default AboutOverview;
