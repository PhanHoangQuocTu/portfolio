'use client';

import React from 'react';
import { AppContextProvider } from '@/context/app.context';

import FloatingDockLayout from './components/FloatingDockLayout';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <AppContextProvider value={{}}>
      <div className="flex">
        <article className="relative min-h-screen w-full overflow-hidden text-clip">
          <main className="relative min-h-screen">{children}</main>

          <FloatingDockLayout />
        </article>
      </div>
    </AppContextProvider>
  );
};

export default MainLayout;
