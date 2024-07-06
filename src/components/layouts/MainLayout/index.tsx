'use client';

import React from 'react';

import Sidebar from './components/Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <article className="container w-full text-clip">
        <main className="relative min-h-screen">{children}</main>
      </article>
    </div>
  );
};

export default MainLayout;
