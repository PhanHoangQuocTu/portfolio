import React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  opened: boolean;
  children: React.ReactNode;
};

const SidebarLayout: React.FC<Props> = ({ children, opened }) => {
  return (
    <aside
      className={cn(
        'min-w-sidebar max-w-sidebar relative z-50 hidden w-full bg-[#202020] text-white shadow-md transition-all duration-200 lg:flex',
        {
          'max-w-sidebar-expand': opened,
        }
      )}
    >
      {children}
    </aside>
  );
};

export default React.memo(SidebarLayout);
