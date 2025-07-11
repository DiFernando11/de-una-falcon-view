import { Outlet, useLocation } from 'react-router';
import { NavMenu } from './navMenu';
import { Atom } from '@shared/ui';

import ReactGA from 'react-ga4';
import { useEffect } from 'react';

function usePageView() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);
}

const LayoutAuthenticated = () => {
  usePageView();
  return (
    <Atom.Box className="bg-transparent grid grid-rows-[80px_1fr]">
      <header>
        <NavMenu />
      </header>
      <main className="px-4 py-12">
        <Outlet />
      </main>
    </Atom.Box>
  );
};

export default LayoutAuthenticated;
