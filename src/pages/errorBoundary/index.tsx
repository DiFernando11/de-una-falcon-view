import ErrorFallback from '@/shared/components/errorFallback';
import * as Sentry from '@sentry/react';
import { Suspense, type ReactNode } from 'react';

interface PageBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const PageBoundary = ({ children, fallback }: PageBoundaryProps) => (
  <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
    <Suspense fallback={fallback ?? <div>Cargando...</div>}>{children}</Suspense>
  </Sentry.ErrorBoundary>
);

export default PageBoundary;
