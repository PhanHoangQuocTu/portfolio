'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { AppContextProvider } from '@/context/app.context';
import { SidebarContextProvider } from '@/context/sidebar.context';
import { ROUTE } from '@/routes';

import Sidebar from './components/Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  const isValidLayout = pathname === ROUTE.HOME;

  if (!isValidLayout)
    return (
      <article className="w-full text-clip bg-[#161616]">
        <main className="relative min-h-screen">{children}</main>
      </article>
    );

  return (
    <AppContextProvider value={{}}>
      <SidebarContextProvider value={{ activeSection, setActiveSection }}>
        <div className="flex">
          <Sidebar />

          <article className="w-full text-clip bg-[#161616]">
            <main className="relative min-h-screen">{children}</main>
          </article>
        </div>
      </SidebarContextProvider>
    </AppContextProvider>
  );
};

export default MainLayout;
