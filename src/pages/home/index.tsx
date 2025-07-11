import type { LaunchAdapter } from '@/domain/models';
import { useGetLaunchesQuery } from '@/services';
import LaunchPreviewCard from '@/shared/components/launchPreviewCard';
import { ROUTES_CLIENT } from '@/shared/constants';
import { Atom, Organisms } from '@/shared/ui';
import type { RootState } from '@/store';
import { addFavorite, removeFavorite } from '@/store/favoritesSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: launches, isLoading, isError } = useGetLaunchesQuery({ limit: 5, offset: 0 });
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const isFavorite = useCallback(
    (id: string) => favorites.some((fav) => fav.id === id),
    [favorites]
  );

  const handleRedirect = (id: string) => {
    navigate(ROUTES_CLIENT.LAUNCH_DETAIL(id));
  };

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
            id: launch.id,
            theme: 'glassDark',
            children: (
              <LaunchPreviewCard
                onClick={() => handleRedirect(launch.id)}
                isFavorite={isFavorite(launch.id)}
                launch={launch}
                handleAddOrRemoveFavoriteLaunch={() => handleAddOrRemoveFavoriteLaunch(launch)}
              />
            ),
          })) ?? []
        }
      />
    </Atom.Box>
  );
}

export default Home;
