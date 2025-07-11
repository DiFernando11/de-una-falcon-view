import { useNavigate } from 'react-router';
import { useGetLaunchesQuery } from '@/services';
import LaunchPreviewCard from '@/shared/components/launchPreviewCard';
import { ROUTES_CLIENT } from '@/shared/constants';
import { Atom, Organisms } from '@/shared/ui';
import type { LaunchAdapter } from '@/domain/models';
import { useFavoritesLaunch } from '@/shared/hooks';

function Home() {
  const navigate = useNavigate();
  const { isFavorite, handleAddFavorite, handleRemoveFavorite } = useFavoritesLaunch();
  const { data: launches, isLoading, isError } = useGetLaunchesQuery({ limit: 5, offset: 0 });

  const handleRedirect = (id: string) => {
    navigate(ROUTES_CLIENT.LAUNCH_DETAIL(id));
  };

  const handleAddOrRemoveFavoriteLaunch = (launch: LaunchAdapter) => {
    if (isFavorite(launch.id)) {
      handleRemoveFavorite(launch.id);
    } else {
      handleAddFavorite(launch);
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
