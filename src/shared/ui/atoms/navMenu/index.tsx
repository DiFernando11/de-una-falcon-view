import { ROUTES_CLIENT } from '@/shared/constants';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav className="p-4 bg-gray-100 flex gap-4">
      <Link to={ROUTES_CLIENT.HOME} className="text-blue-600 hover:underline">
        Home
      </Link>
      <Link to={ROUTES_CLIENT.FAVORITES} className="text-blue-600 hover:underline">
        Favorites
      </Link>
      <Link to={ROUTES_CLIENT.LAUNCH_DETAIL('124')} className="text-blue-600 hover:underline">
        Launch Detail
      </Link>
    </nav>
  );
};

export default NavMenu;
