'use client';

import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { AnimatePresence } from 'framer-motion';

import { cn } from '@/lib/utils';
import { VStack } from '@/components/ui/v-stack';

import SidebarHeader from './SidebarHeader';
import SidebarLayout from './SidebarLayout';
import SidebarList from './SidebarList';

const Sidebar = () => {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <SidebarLayout opened={opened}>
      <VStack
        spacing={32}
        className={cn('max-w-sidebar fixed left-0 top-0 flex h-full w-full overflow-y-auto p-4', {
          'max-w-sidebar-expand': opened,
        })}
      >
        <SidebarHeader opened={opened} toggle={toggle} />

        <AnimatePresence>
          <SidebarList opened={opened} />
        </AnimatePresence>
      </VStack>
    </SidebarLayout>
  );
};

export default Sidebar;
