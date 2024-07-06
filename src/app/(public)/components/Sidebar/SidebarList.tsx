import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Icons } from '@/assets/icons';
import { ROUTE } from '@/routes';

import { SidebarItem } from './SidebarItem';

const SIDEBAR_LIST = [
  {
    name: 'Home',
    href: ROUTE.HOME,
    icon: Icons.badgeDollarSign,
  },
];

interface Props {
  opened: boolean;
}

export const SidebarList: React.FC<Props> = ({ opened }) => {
  const pathname = usePathname();

  return (
    <>
      {SIDEBAR_LIST.map(({ href, name, icon }) => {
        const isActive = pathname.includes(href);

        return <SidebarItem key={href} href={href} name={name} opened={opened} icon={icon} isActive={isActive} />;
      })}
    </>
  );
};
