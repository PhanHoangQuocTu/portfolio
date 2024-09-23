import React, { type FC, type HTMLAttributes } from 'react';
import { Icons } from '@/assets/icons';

import { cn } from '@/lib/utils';
import { HStack } from '@/components/ui/h-stack';

const Contact = () => {
  return (
    <div className="space-y-5 text-white">
      <p className="drop-shadow-neon-white text-4xl font-bold">Contact</p>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <ContactItem icon={<Icons.mail size={48} />} value="tuphan694@gmail.com" />
        <ContactItem icon={<Icons.phone size={48} />} value="(+84) 905 332 165" />
      </div>
    </div>
  );
};

interface IContactItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  value: string;
  valueClassName?: IContactItemProps['className'];
}

const ContactItem: FC<IContactItemProps> = ({ icon, value, className, valueClassName, ...props }) => {
  return (
    <HStack className={cn('col-span-1 text-white', className)} spacing={12} noWrap {...props}>
      {icon}

      <span className={cn('flex-1 text-xl', valueClassName)}>{value}</span>
    </HStack>
  );
};

export default Contact;
