'use client';

import { createSafeContext } from '@/lib/create-safe-context';

type SidebarContextProps = {
  activeSection: string | null;
  setActiveSection: (section: string) => void;
};

export const [SidebarContextProvider, useSidebarContext] = createSafeContext<SidebarContextProps>(
  'SidebarContextProvider component was not found in tree'
);
