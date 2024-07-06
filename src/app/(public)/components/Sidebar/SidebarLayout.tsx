import React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  opened: boolean;
  children: React.ReactNode;
};

export const SidebarLayout: React.FC<Props> = ({ children, opened }) => {
  return (
    <aside
      className={cn(
        'min-w-sidebar max-w-sidebar relative z-50 flex w-full bg-black text-white shadow-md transition-all duration-200',
        {
          'max-w-sidebar-expand': opened,
        }
      )}
    >
      {children}
    </aside>
  );
};
