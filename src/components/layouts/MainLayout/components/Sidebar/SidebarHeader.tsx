import React from 'react';
import { Icons } from '@/assets/icons';

import { cn } from '@/lib/utils';
import { HStack } from '@/components/ui/h-stack';
import { StyledButton } from '@/components/ui/styled-button';

interface Props {
  opened: boolean;
  toggle: () => void;
}

const SidebarHeader: React.FC<Props> = ({ opened, toggle }) => {
  return (
    <HStack pos={'center'}>
      <StyledButton
        variant="ghost"
        className={cn('w-fit min-w-min !px-3 hover:!bg-transparent hover:!opacity-50', {
          '!px-0': !opened,
        })}
        onClick={toggle}
      >
        <Icons.menuSquare className="hover:text-accent text-white" />
      </StyledButton>

      {opened && <span className="flex-1 text-xl font-medium">Portfolio</span>}
    </HStack>
  );
};

export default React.memo(SidebarHeader);
