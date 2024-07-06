import { type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from 'react';
import {
  BadgeDollarSign,
  Bolt,
  ClipboardList,
  FolderGit2,
  GraduationCap,
  Home,
  LogOut,
  MenuSquare,
  Phone,
  User,
} from 'lucide-react';

import briefcaseBusiness from './svg/briefcase-business.svg';
import codeSandbox from './svg/code-sandbox.svg';

const IconList = {
  badgeDollarSign: BadgeDollarSign,
  menuSquare: MenuSquare,
  logout: LogOut,
  home: Home,
  clipboardList: ClipboardList,
  user: User,
  bolt: Bolt,
  codeSandbox,
  graduationCap: GraduationCap,
  briefcaseBusiness,
  folderGit2: FolderGit2,
  phone: Phone,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
