'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ROUTE, SECTION_ID } from '@/routes';
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

const routes = [
  {
    id: SECTION_ID.OVERVIEW,
    href: ROUTE.OVERVIEW,
  },
  {
    id: SECTION_ID.ABOUT,
    href: ROUTE.ABOUT,
  },
  {
    id: SECTION_ID.SERVICES,
    href: ROUTE.SERVICES,
  },
  {
    id: SECTION_ID.SKILL,
    href: ROUTE.SKILL,
  },
  {
    id: SECTION_ID.EDUCATION,
    href: ROUTE.EDUCATION,
  },
  {
    id: SECTION_ID.EXPERIENCE,
    href: ROUTE.EXPERIENCE,
  },
];

const FloatingDockLayout = () => {
  const pathname = usePathname();

  const links = React.useMemo(
    () =>
      Object.keys(icons).map((sectionId) => {
        const IconComponent = icons[sectionId];
        const route = routes.find((route) => route?.id === sectionId);
        return {
          title: sectionId.charAt(0).toUpperCase() + sectionId.slice(1).toLowerCase(),
          icon: (
            <IconComponent
              className={cn('h-full w-full text-neutral-500 dark:text-neutral-300', {
                'text-white': pathname === route?.href,
              })}
            />
          ),
          href: route?.href || '',
        };
      }),
    [pathname]
  );

  return (
    <div className="fixed bottom-16 z-50 flex w-full items-center justify-center">
      <FloatingDock items={links} />
    </div>
  );
};

export default FloatingDockLayout;
