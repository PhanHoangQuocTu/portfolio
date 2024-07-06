import { type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from 'react';
import { BadgeDollarSign, Home, LogOut, MenuSquare } from 'lucide-react';

const IconList = {
  badgeDollarSign: BadgeDollarSign,
  menuSquare: MenuSquare,
  logout: LogOut,
  home: Home,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
