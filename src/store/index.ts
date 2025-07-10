import { launchesApi } from '@/services';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [launchesApi.reducerPath]: launchesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(launchesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
