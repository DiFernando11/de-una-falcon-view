import type { LaunchAdapter } from '@/domain/models';
import { useGetLaunchesQuery } from '@/services';
import { Atom, Organisms } from '@/shared/ui';
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
      <Atom.Text as="h1" textType="heading">
        SpaceX Launches
      </Atom.Text>
      <Organisms.CardGallery
        cards={
          launches?.map((launch) => ({
            key: launch.id,
            theme: 'glassDark',
            animated: true,
            children: (
              <div className="flex flex-col items-center">
                <Atom.Text textType="heading" color="primary" as="h3">
                  {launch.missionName}
                </Atom.Text>
                <Atom.Button
                  variant={isFavorite(launch.id) ? 'secondary' : 'outline'}
                  onClick={() => handleAddOrRemoveFavoriteLaunch(launch)}
                >
                  {isFavorite(launch.id) ? 'ELIMINAR' : 'AGREGAR'}
                </Atom.Button>
              </div>
            ),
          })) ?? []
        }
      />
    </Atom.Box>
  );
}

export default Home;
