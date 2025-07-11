import { useParams } from 'react-router-dom';
import { Atom, Molecules } from '@/shared/ui';
import { useGetLaunchByIdQuery } from '@/services';
import LaunchDetailCard from './components/launchDetailCard';
import { useFavoritesLaunch } from '@/shared/hooks';

const LaunchDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isFavorite, handleAddOrRemoveFavoriteLaunch } = useFavoritesLaunch();
  const { data: launch, isError, isLoading } = useGetLaunchByIdQuery(id || '');

  const isCurrentFavorite = isFavorite(id || '');

  return (
    <Atom.Box>
      {isLoading && <LaunchDetailCard.Skeleton />}
      {isError && (
        <Molecules.Alert type="error">
          <Atom.Text>
            An error occurred while fetching the SpaceX launches. Please try again later.
          </Atom.Text>
        </Molecules.Alert>
      )}
      <LaunchDetailCard
        handleAddOrRemoveFavoriteLaunch={handleAddOrRemoveFavoriteLaunch}
        launch={launch}
        isFavorite={isCurrentFavorite}
      />
    </Atom.Box>
  );
};

export default LaunchDetail;
