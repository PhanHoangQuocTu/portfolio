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
          className={cn('text-[#5f5f5f] transition-all', {
            'text-white': isSectionActive,
          })}
        />
      </span>

      {opened && (
        <motion.span
          animate={{ opacity: 1 }}
          className={cn('text-[#5f5f5f] transition-all', {
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
            'absolute w-fit select-none border bg-white bg-clip-text py-4 pl-14 text-center font-extrabold text-transparent blur-xl',
            {
              'w-12': !opened,
            }
          )}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        >
          {name}
        </motion.div>
      )}
    </Link>
  );
};

export default React.memo(SidebarItem);
