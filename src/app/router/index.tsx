import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from '@/shared/ui/layouts';
import { ROUTES_CLIENT } from '@/shared/constants';
import PageBoundary from '@/pages/errorBoundary';

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
          <PageBoundary>
            <HomePage />
          </PageBoundary>
        ),
      },
      {
        path: ROUTES_CLIENT.FAVORITES,
        element: (
          <PageBoundary>
            <FavoritesPage />
          </PageBoundary>
        ),
      },
      {
        path: ROUTES_CLIENT.LAUNCH_DETAIL(),
        element: (
          <PageBoundary>
            <LaunchDetailPage />
          </PageBoundary>
        ),
      },
    ],
  },
]);

export default router;
