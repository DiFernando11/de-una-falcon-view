import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ArrowLeft } from 'lucide-react';
import { ROUTES_CLIENT } from '@/shared/constants';
import { useState } from 'react';
import ItemsMenu from '../itemsMenu';
import { Atom } from '@/shared/ui/atoms';

export const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === ROUTES_CLIENT.HOME;

  return (
    <nav
      className="relative flex items-center justify-between 
      h-full px-6 py-4 backdrop-blur-md rounded-b-2xl 
      border-b border-white/10 shadow-lg"
    >
      <Atom.Box className="flex gap-4">
        {!isHome && (
          <Atom.Button
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            aria-label="Go back"
            variant={'outline'}
          >
            <ArrowLeft className="w-5 h-5 text-secondary-400" />
          </Atom.Button>
        )}
        <Link
          to={ROUTES_CLIENT.HOME}
          className="flex items-center gap-2 text-white text-2xl font-bold hover:scale-105 transition-transform"
        >
          <span className="text-3xl">🚀</span>
          <span className="bg-gradient-to-r from-accent-400 to-highlight-200 bg-clip-text text-transparent">
            FalconView
          </span>
        </Link>
      </Atom.Box>
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
