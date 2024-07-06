'use client';

import React from 'react';
import { AppContextProvider } from '@/context/app.context';

import MainLayout from '@/components/layouts/MainLayout';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <AppContextProvider value={{}}>
      <MainLayout>{children}</MainLayout>
    </AppContextProvider>
  );
};

export default Layout;
