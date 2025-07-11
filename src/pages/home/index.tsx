import { useNavigate } from 'react-router';
import { useGetLaunchesQuery } from '@/services';
import LaunchPreviewCard from '@/shared/components/launchPreviewCard';
import { ROUTES_CLIENT } from '@/shared/constants';
import { Atom, Molecules, Organisms } from '@/shared/ui';
import { useFavoritesLaunch } from '@/shared/hooks';
import { useState } from 'react';

const LIMIT = 20;

function Home() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const { isFavorite, handleAddOrRemoveFavoriteLaunch } = useFavoritesLaunch();
  const {
    data: launches = [],
    isFetching,
    isError,
  } = useGetLaunchesQuery({ limit: LIMIT, offset });

  const handleLoadMore = () => setOffset((prev) => prev + LIMIT);

  const handleRedirect = (id: string) => {
    navigate(ROUTES_CLIENT.LAUNCH_DETAIL(id));
  };

  return (
    <Atom.Box className="space-y-8">
      <Atom.Text as="h1" textType="heading">
        SpaceX Launches
      </Atom.Text>
      <Organisms.CardGallery
        cards={launches.map((launch) => ({
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
        }))}
      />
      {isFetching && (
        <Organisms.CardGallery
          cards={Array.from({ length: LIMIT }).map((_, idx) => ({
            id: `skeleton-${idx}`,
            theme: 'glassDark',
            children: <LaunchPreviewCard.Skeleton />,
          }))}
        />
      )}
      {isError && (
        <Molecules.Alert type="error">
          <Atom.Text>
            An error occurred while fetching the SpaceX launches. Please try again later.
          </Atom.Text>
        </Molecules.Alert>
      )}
      {!isFetching && launches.length && launches.length % LIMIT === 0 && (
        <Atom.Box className="flex justify-center mt-8">
          <Atom.Button variant="primary" onClick={handleLoadMore}>
            <Atom.Text>Ver mas</Atom.Text>
          </Atom.Button>
        </Atom.Box>
      )}
    </Atom.Box>
  );
}

export default Home;
