'use client';

import React, { useState, type FC, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AppContextProvider } from '@/context/app.context';
import { SidebarContextProvider } from '@/context/sidebar.context';
import { ROUTE } from '@/routes';

import Sidebar from './components/Sidebar';

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const isValidLayout = pathname === ROUTE.HOME;
  if (!isValidLayout)
    return (
      <article className="container w-full text-clip">
        <main className="relative min-h-screen">{children}</main>
      </article>
    );

  return (
    <AppContextProvider value={{}}>
      <SidebarContextProvider value={{ activeSection, setActiveSection }}>
        <div className="flex">
          <Sidebar />

          <article className="container w-full text-clip">
            <main className="relative min-h-screen">{children}</main>
          </article>
        </div>
      </SidebarContextProvider>
    </AppContextProvider>
  );
};

export default MainLayout;
