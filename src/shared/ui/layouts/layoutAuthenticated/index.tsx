import { Outlet } from 'react-router';
import { NavMenu } from './navMenu';
import { Atom } from '@shared/ui';

const LayoutAuthenticated = () => {
  return (
    <Atom.Box className="bg-transparent grid grid-rows-[80px_1fr] h-screen w-screen">
      <header>
        <NavMenu />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </Atom.Box>
  );
};

export default LayoutAuthenticated;
