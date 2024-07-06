import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Props {
  href: string;
  name: string;
  opened: boolean;
  icon: LucideIcon;
  isActive: boolean;
}

export const SidebarItem: React.FC<Props> = ({ href, isActive, name, opened, icon: Icon }) => (
  <Link href={href} className="inline-flex items-center gap-2" key={href}>
    <span className="relative z-0 inline-flex aspect-square w-[calc(var(--w-sidebar)-2rem)] items-center justify-center rounded-md">
      <Icon
        className={cn('transition-all', {
          'text-[#03acfa]': isActive,
          'text-[#ffffff]': !isActive,
        })}
      />

      {isActive && (
        <motion.div
          layoutId="sidebar-active"
          className="bg-main absolute bottom-0 left-0 z-[-1] h-full w-full rounded-md"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </span>

    {opened && <motion.span animate={{ opacity: 1 }}>{name}</motion.span>}
  </Link>
);
