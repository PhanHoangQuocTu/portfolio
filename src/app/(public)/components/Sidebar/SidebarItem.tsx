import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

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

const SidebarItem: React.FC<Props> = ({ href, isActive, name, opened, icon: Icon, id, type = 'page' }) => {
  const hrefValue = React.useMemo(() => {
    if (type === 'section') {
      return `#${id}`;
    }

    return href;
  }, [href, id, type]);

  return (
    <Link href={hrefValue} className="inline-flex items-center gap-2 hover:opacity-50" key={`${name}-${hrefValue}`}>
      <span className="relative z-0 inline-flex aspect-square w-[calc(var(--w-sidebar)-2rem)] items-center justify-center rounded-md">
        <Icon className="text-black transition-all" />

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
};

export default React.memo(SidebarItem);
