'use client';

import React from 'react';
import { SidebarContextProvider } from '@/context/sidebar.context';

import Sidebar from './components/Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  return (
    <SidebarContextProvider value={{ activeSection, setActiveSection }}>
      <div className="flex">
        <Sidebar />

        <article className="container w-full text-clip">
          <main className="relative min-h-screen">{children}</main>
        </article>
      </div>
    </SidebarContextProvider>
  );
};

export default MainLayout;
