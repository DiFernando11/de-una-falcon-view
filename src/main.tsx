import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react'; // 👈 Importa Sentry
import { ApolloProvider } from '@apollo/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';
import { apolloClient } from './infrastructure/graphql/client';
import './index.css';
import App from './app';

Sentry.init({
  dsn: 'https://df44928d5d2e1de48ed8cadc25dd3805@o4509647729524736.ingest.us.sentry.io/4509647734702080',
  sendDefaultPii: true,
});

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
