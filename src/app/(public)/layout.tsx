'use client';

import React, { type PropsWithChildren } from 'react';
import { AppContextProvider } from '@/context/app.context';

import Sidebar from './components/Sidebar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <AppContextProvider value={{}}>
      <div className="flex">
        <Sidebar />

        <article className="container w-full text-clip">
          {/* <Header /> */}

          <main className="relative min-h-screen pb-4">{children}</main>
        </article>
      </div>
    </AppContextProvider>
  );
};

export default Layout;
