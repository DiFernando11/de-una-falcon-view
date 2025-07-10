import { Outlet } from 'react-router';
import { Atom } from '../../atoms';

const LayoutAuthenticated = () => {
  return (
    <div>
      <Atom.NavMenu />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutAuthenticated;
