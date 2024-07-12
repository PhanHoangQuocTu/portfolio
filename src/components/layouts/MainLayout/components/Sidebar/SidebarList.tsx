import React, { memo, type FC } from 'react';
import { usePathname } from 'next/navigation';
import { Icons } from '@/assets/icons';
import { SECTION_ID, SECTION_NAME } from '@/routes';

import { VStack } from '@/components/ui';

import SidebarItem, { type SidebarItemType } from './SidebarItem';

const SIDEBAR_LIST = [
  {
    name: SECTION_NAME.OVERVIEW,
    id: SECTION_ID.OVERVIEW,
    href: '',
    icon: Icons.home,
    type: 'section',
  },
  {
    name: SECTION_NAME.ABOUT,
    id: SECTION_ID.ABOUT,
    href: '',
    icon: Icons.user,
    type: 'section',
  },
  {
    name: SECTION_NAME.SERVICES,
    id: SECTION_ID.SERVICES,
    href: '',
    icon: Icons.bolt,
    type: 'section',
  },
  {
    name: SECTION_NAME.SKILL,
    id: SECTION_ID.SKILL,
    href: '',
    icon: Icons.codeSandbox,
    type: 'section',
  },
  {
    name: SECTION_NAME.EDUCATION,
    id: SECTION_ID.EDUCATION,
    href: '',
    icon: Icons.graduationCap,
    type: 'section',
  },
  {
    name: SECTION_NAME.EXPERIENCE,
    id: SECTION_ID.EXPERIENCE,
    href: '',
    icon: Icons.briefcaseBusiness,
    type: 'section',
  },
  {
    name: SECTION_NAME.PROJECT,
    id: SECTION_ID.PROJECT,
    href: '',
    icon: Icons.folderGit2,
    type: 'section',
  },
  {
    name: SECTION_NAME.CONTACT,
    id: SECTION_ID.CONTACT,
    href: '',
    icon: Icons.phone,
    type: 'section',
  },
];

interface Props {
  opened: boolean;
}

const SidebarList: FC<Props> = ({ opened }) => {
  const pathname = usePathname();

  return (
    <VStack spacing={16} className="flex-1">
      {SIDEBAR_LIST?.map(({ href, name, icon, id, type }, index) => {
        const isActive = pathname?.includes(href);

        return (
          <SidebarItem
            key={`${name}-${index}`}
            href={href}
            name={name}
            opened={opened}
            icon={icon}
            isActive={isActive}
            id={id}
            type={type as SidebarItemType}
          />
        );
      })}
    </VStack>
  );
};

export default memo(SidebarList);
