'use client';

import Link from 'next/link';
import { Icons } from '@/assets/icons';
import { ROUTE } from '@/routes';
import { useDisclosure } from '@mantine/hooks';
import { AnimatePresence } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { HStack, StyledButton } from '@/components/ui';

import { SidebarLayout } from './SidebarLayout';
import { SidebarList } from './SidebarList';

const Sidebar = () => {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <SidebarLayout opened={opened}>
      <div
        className={cn('max-w-sidebar fixed left-0 top-0 flex h-full w-full flex-col gap-8 overflow-y-auto p-4', {
          'max-w-sidebar-expand': opened,
        })}
      >
        <StyledButton variant="ghost" className="hover:bg-transparent" onClick={toggle}>
          <Icons.menuSquare className="hover:text-accent text-white" />
        </StyledButton>
        <HStack spacing={24} pos={opened ? 'apart' : 'center'} className="w-full">
          {opened && (
            <Link href={ROUTE.HOME}>
              <Logo />
            </Link>
          )}
        </HStack>

        <AnimatePresence>
          <div className="flex flex-1 flex-col gap-4">
            <SidebarList opened={opened} />
          </div>
        </AnimatePresence>
      </div>
    </SidebarLayout>
  );
};

export { Sidebar };
