import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { ROUTES_CLIENT } from '@/shared/constants';
import { useState } from 'react';
import ItemsMenu from '../itemsMenu';

export const NavMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="relative flex items-center justify-between 
    h-full px-6 py-4 backdrop-blur-md rounded-b-2xl 
    border-b border-white/10 shadow-lg"
    >
      <Link
        to={ROUTES_CLIENT.HOME}
        className="flex items-center gap-2 text-white text-2xl font-bold hover:scale-105 transition-transform"
      >
        <span className="text-3xl">🚀</span>
        <span className="bg-gradient-to-r from-accent-400 to-highlight-200 bg-clip-text text-transparent">
          FalconView
        </span>
      </Link>
      <ItemsMenu open={open} />
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white p-2"
        aria-label="Open menu"
      >
        <Menu className="cursor-pointer" />
      </button>
    </nav>
  );
};
