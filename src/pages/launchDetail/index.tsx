import { useParams } from 'react-router-dom';
import { Atom } from '@/shared/ui';
import { useGetLaunchByIdQuery } from '@/services';
import LaunchDetailCard from './components/launchDetailCard';
import { useFavoritesLaunch } from '@/shared/hooks';

const LaunchDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isFavorite, handleAddOrRemoveFavoriteLaunch } = useFavoritesLaunch();
  const { data: launch, isLoading, isError } = useGetLaunchByIdQuery(id || '');

  const isCurrentFavorite = isFavorite(id || '');

  return (
    <Atom.Box>
      {isLoading && <div>Cargando...</div>}
      {isError && <div>Error al cargar</div>}
      <LaunchDetailCard
        handleAddOrRemoveFavoriteLaunch={handleAddOrRemoveFavoriteLaunch}
        launch={launch}
        isFavorite={isCurrentFavorite}
      />
    </Atom.Box>
  );
};

export default LaunchDetail;
