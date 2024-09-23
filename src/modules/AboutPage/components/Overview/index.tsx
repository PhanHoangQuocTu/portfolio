import React from 'react';

import { VStack } from '@/components/ui/v-stack';
import Avatar from '@/components/Avatar';

import OverviewText from './OverviewText';

const Overview = () => {
  return (
    <VStack spacing={40} align="start" className="lg:flex-row">
      <Avatar className="h-48 w-48 object-cover" />

      <OverviewText />
    </VStack>
  );
};

export default Overview;
