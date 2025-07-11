import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { launchesApi } from '@/services';
import favoritesReducer from './favoritesSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FAVORITES_KEY } from '@/shared/constants';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [FAVORITES_KEY],
};

const rootReducer = combineReducers({
  [launchesApi.reducerPath]: launchesApi.reducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(launchesApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
