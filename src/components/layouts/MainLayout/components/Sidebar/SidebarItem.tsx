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

const SidebarItem: React.FC<Props> = ({ href, name, opened, icon: Icon, id, type = 'page' }) => {
  const { activeSection } = useSidebarContext();

  const isSectionActive = React.useMemo(() => type === 'section' && activeSection === id, [activeSection, id, type]);

  const hrefValue = React.useMemo(() => (type === 'section' ? `#${id}` : href), [href, id, type]);

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (type === 'section') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    [id, type]
  );

  return (
    <Link
      scroll={false}
      href={hrefValue}
      className="relative inline-flex items-center gap-2 hover:opacity-70 focus:opacity-70"
      key={`${name}-${hrefValue}`}
      onClick={handleClick}
      aria-current={isSectionActive ? 'page' : undefined}
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
            'absolute bottom-0 left-0 z-[-1] h-full w-full rounded-md bg-gradient-to-r from-[#4b6cb7] to-[#182848]',
            {
              'w-12': !opened,
            }
          )}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
};

export default React.memo(SidebarItem);
