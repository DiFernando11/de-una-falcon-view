import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { LaunchAdapter } from '@/domain/models';
import { FAVORITES_KEY } from '@/shared/constants';

interface FavoritesState {
  favorites: LaunchAdapter[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: FAVORITES_KEY,
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<LaunchAdapter>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((fav) => fav.id !== action.payload);
    },
    setFavorites: (state, action: PayloadAction<LaunchAdapter[]>) => {
      state.favorites = action.payload;
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
