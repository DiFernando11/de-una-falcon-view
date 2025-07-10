import type { LaunchAdapter } from '@/domain/models';
import { useGetLaunchesQuery } from '@/services';
import { Atom, Molecules } from '@/shared/ui';
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
    <Atom.Box className="space-y-4">
      <Atom.Text as={'h1'} textType={'heading'}>
        SpaceX Launches
      </Atom.Text>
      <ul className="space-y-4">
        {launches?.map((launch) => (
          <Molecules.Card theme="glassDark" key={launch.id}>
            <li>
              <strong>{launch.missionName}</strong>
              <Atom.Button
                variant={'outline'}
                onClick={() => handleAddOrRemoveFavoriteLaunch(launch)}
              >
                {isFavorite(launch.id) ? 'ELIMINAR' : 'AGREGAR'}
              </Atom.Button>
            </li>
          </Molecules.Card>
        ))}
      </ul>
    </Atom.Box>
  );
}

export default Home;
