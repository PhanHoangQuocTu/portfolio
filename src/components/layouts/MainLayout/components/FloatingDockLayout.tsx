'use client';

import React from 'react';
import { useSidebarContext } from '@/context/sidebar.context';
import { SECTION_ID } from '@/routes';
import {
  IconBook,
  IconBrain,
  IconHome,
  IconList,
  IconPhone,
  IconSchool,
  IconSitemap,
  IconUser,
} from '@tabler/icons-react';

import { cn } from '@/lib/utils';
import { FloatingDock } from '@/components/ui/floating-dock';

const icons = {
  [SECTION_ID.OVERVIEW]: IconHome,
  [SECTION_ID.ABOUT]: IconUser,
  [SECTION_ID.SERVICES]: IconSitemap,
  [SECTION_ID.SKILL]: IconBrain,
  [SECTION_ID.EDUCATION]: IconSchool,
  [SECTION_ID.EXPERIENCE]: IconBook,
  [SECTION_ID.PROJECT]: IconList,
  [SECTION_ID.CONTACT]: IconPhone,
};

const FloatingDockLayout = () => {
  const { activeSection } = useSidebarContext();

  const links = React.useMemo(
    () =>
      Object.keys(icons).map((sectionId) => {
        const IconComponent = icons[sectionId];
        return {
          title: sectionId.charAt(0) + sectionId.slice(1).toLowerCase(),
          icon: (
            <IconComponent
              className={cn('h-full w-full text-neutral-500 dark:text-neutral-300', {
                'text-white': activeSection === sectionId,
              })}
            />
          ),
          href: `#${sectionId}`,
        };
      }),
    [activeSection]
  );

  return (
    <div className="fixed bottom-16 z-50 flex w-full items-center justify-center">
      <FloatingDock items={links} />
    </div>
  );
};

export default FloatingDockLayout;
