import type { LaunchAdapter } from '@/domain/models';
import { useGetLaunchesQuery } from '@/services';
import { Atom } from '@/shared/ui';
import type { RootState } from '@/store';
import { addFavorite, removeFavorite } from '@/store/favoritesSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const { data: launches, isLoading, isError } = useGetLaunchesQuery({ limit: 5, offset: 0 });
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const isFavorite = useCallback(
    (id: string) => favorites.some((fav) => fav.id === id),
    [favorites]
  );

  const handleAddOrRemoveFavoriteLaunch = (launch: LaunchAdapter) => {
    if (isFavorite(launch.id)) {
      dispatch(removeFavorite(launch.id));
    } else {
      dispatch(addFavorite(launch));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading launches</div>;

  return (
    <div>
      <Atom.Text textType={'heading'}>SpaceX Launches</Atom.Text>
      <ul>
        {launches?.map((launch) => (
          <li key={launch.id}>
            <strong>{launch.missionName}</strong> ({launch.rocketName}) – {launch.launchDate}
            <Atom.Button
              variant={'outline'}
              onClick={() => handleAddOrRemoveFavoriteLaunch(launch)}
            >
              {isFavorite(launch.id) ? 'ELIMINAR' : 'AGREGAR'}
            </Atom.Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
