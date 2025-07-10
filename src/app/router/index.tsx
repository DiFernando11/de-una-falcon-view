import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from '@/shared/ui/layouts';
import { ROUTES_CLIENT } from '@/shared/constants';

const HomePage = lazy(() => import('@/pages/home'));
const FavoritesPage = lazy(() => import('@/pages/favorites'));
const LaunchDetailPage = lazy(() => import('@/pages/launchDetail'));

const router = createBrowserRouter([
  {
    path: ROUTES_CLIENT.HOME,
    element: <Layout.LayoutAuthenticated />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: ROUTES_CLIENT.FAVORITES,
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <FavoritesPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES_CLIENT.LAUNCH_DETAIL(),
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <LaunchDetailPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
