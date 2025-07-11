import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { ApolloProvider } from '@apollo/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga4';
import { store, persistor } from '@/store';
import { apolloClient } from './infrastructure/graphql/client';
import App from './app';
import './index.css';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  sendDefaultPii: true,
});

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  console.log('ME INICIE CON ', GA_MEASUREMENT_ID);
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </Provider>
    </PersistGate>
  </StrictMode>
);
