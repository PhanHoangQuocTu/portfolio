import React, { memo, type FC, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  opened: boolean;
  children: ReactNode;
};

const SidebarLayout: FC<Props> = ({ children, opened }) => {
  return (
    <aside
      className={cn(
        'min-w-sidebar max-w-sidebar relative z-50 hidden w-full bg-[#f3f4f8] text-black shadow-md transition-all duration-200 lg:flex',
        {
          'max-w-sidebar-expand': opened,
        }
      )}
    >
      {children}
    </aside>
  );
};

export default memo(SidebarLayout);
