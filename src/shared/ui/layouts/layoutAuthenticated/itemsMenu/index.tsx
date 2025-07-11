import { Link, useLocation } from 'react-router-dom';
import { Home, Heart } from 'lucide-react';
import clsx from 'clsx';
import { ROUTES_CLIENT } from '@/shared/constants';
import { twMerge } from 'tailwind-merge';
import type { ItemsMenuProps } from './types';

const menuItems = [
  { label: 'Home', icon: Home, to: ROUTES_CLIENT.HOME },
  { label: 'Favorites', icon: Heart, to: ROUTES_CLIENT.FAVORITES },
];

const ItemsMenu = ({ open }: ItemsMenuProps) => {
  const { pathname } = useLocation();
  return (
    <div
      className={twMerge(
        'backdrop-blur- border-b rounded-b-2xl border-white/10 shadow-lg hidden absolute right-0 top-20 p-4 justify-start items-start flex-col',
        'transition-all duration-300 ease-in-out transform backdrop-blur-2xl backdrop-saturate-200 border',
        'md:flex md:static md:flex-row md:p-0 md:bg-transparent md:shadow-none md:border-none md:backdrop-blur-0',
        clsx('gap-6', {
          'flex ': open,
        })
      )}
    >
      {menuItems.map(({ label, icon: Icon, to }) => (
        <Link
          key={label}
          to={to}
          className={twMerge(
            'text-accent-400 hover:text-white font-semibold',
            clsx('flex items-center gap-2 relative group transition-colors duration-500', {
              'text-white': pathname !== to,
            })
          )}
        >
          <Icon size={18} />
          <span className="relative z-10">{label}</span>
          <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-accent-400 transition-all group-hover:w-full" />
        </Link>
      ))}
    </div>
  );
};
export default ItemsMenu;
