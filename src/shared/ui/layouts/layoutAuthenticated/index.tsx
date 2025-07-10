import { Outlet } from 'react-router';
import { NavMenu } from './navMenu';

const LayoutAuthenticated = () => {
  return (
    <div className="bg-transparent grid grid-rows-[80px_1fr] h-screen w-screen">
      <header>
        <NavMenu />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutAuthenticated;
