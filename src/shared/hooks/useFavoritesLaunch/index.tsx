import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import type { LaunchAdapter } from '@/domain/models';
import { addFavorite, clearFavorites, removeFavorite } from '@/store/favoritesSlice';

export const useFavoritesLaunch = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const handleRemoveFavorite = (id: string): void => {
    dispatch(removeFavorite(id));
  };
  const handleAddFavorite = (launch: LaunchAdapter): void => {
    dispatch(addFavorite(launch));
  };
  const handleClearFavorites = (): void => {
    dispatch(clearFavorites());
  };

  const handleAddOrRemoveFavoriteLaunch = (launch: LaunchAdapter) => {
    if (isFavorite(launch.id)) {
      handleRemoveFavorite(launch.id);
    } else {
      handleAddFavorite(launch);
    }
  };

  const isFavorite = useCallback(
    (id: string) => favorites.some((fav) => fav.id === id),
    [favorites]
  );

  return {
    isFavorite,
    handleRemoveFavorite,
    handleAddFavorite,
    handleAddOrRemoveFavoriteLaunch,
    handleClearFavorites,
    favorites,
  };
};
