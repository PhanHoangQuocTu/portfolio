import React from 'react';
import Link from 'next/link';
import { useSidebarContext } from '@/context/sidebar.context';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export type SidebarItemType = 'page' | 'section';

interface Props {
  id: string;
  href: string;
  name: string;
  type?: 'page' | 'section';
  opened: boolean;
  icon: LucideIcon;
  isActive: boolean;
}

const SIDEBAR_SECTION_ACTIVE_COLOR = {
  FROM: '#4b6cb7',
  TO: '#182848',
};

const SidebarItem: React.FC<Props> = ({ href, name, opened, icon: Icon, id, type = 'page' }) => {
  const { activeSection } = useSidebarContext();
  const isSectionActive = React.useMemo(() => {
    if (type !== 'section' || !activeSection) return false;
    return activeSection === id;
  }, [activeSection, id, type]);

  const hrefValue = React.useMemo(() => {
    if (type === 'section') {
      return `#${id}`;
    }
    return href;
  }, [href, id, type]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (type === 'section') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      scroll={true}
      href={hrefValue}
      className="relative inline-flex items-center gap-2 hover:opacity-50"
      key={`${name}-${hrefValue}`}
      onClick={handleClick}
    >
      <span className="relative z-0 inline-flex aspect-square w-[calc(var(--w-sidebar)-2rem)] items-center justify-center rounded-md">
        <Icon
          className={cn('text-black transition-all', {
            'text-white': isSectionActive,
          })}
        />
      </span>

      {opened && (
        <motion.span
          animate={{ opacity: 1 }}
          className={cn('text-black transition-all', {
            'text-white': isSectionActive,
          })}
        >
          {name}
        </motion.span>
      )}

      {isSectionActive && (
        <motion.div
          layoutId="sidebar-active"
          className={cn(
            'absolute bottom-0 left-0 z-[-1] h-full w-full rounded-md bg-gradient-to-r',
            `from-[${SIDEBAR_SECTION_ACTIVE_COLOR.FROM}] to-[${SIDEBAR_SECTION_ACTIVE_COLOR.TO}]`
          )}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
};

export default React.memo(SidebarItem);
