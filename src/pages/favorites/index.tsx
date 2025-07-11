import LaunchPreviewCard from '@/shared/components/launchPreviewCard';
import { ROUTES_CLIENT } from '@/shared/constants';
import { useFavoritesLaunch } from '@/shared/hooks';
import { Atom, Molecules, Organisms } from '@/shared/ui';
import { Trash } from 'lucide-react';
import { useNavigate } from 'react-router';

function Favorites() {
  const navigate = useNavigate();
  const { favorites, handleClearFavorites, isFavorite, handleAddOrRemoveFavoriteLaunch } =
    useFavoritesLaunch();

  const handleRedirect = (id: string) => {
    navigate(ROUTES_CLIENT.LAUNCH_DETAIL(id));
  };

  const hasFavorites = favorites && favorites.length > 0;

  if (!hasFavorites) {
    return (
      <Molecules.Card className="flex justify-center max-w-[600px] m-auto gap-4">
        <Atom.Text className="text-center" as="span" textType="subtitle">
          You have no favorite launches yet 🚀
        </Atom.Text>
      </Molecules.Card>
    );
  }

  return (
    <Atom.Box className="space-y-8">
      <Atom.Text as="h1" textType="heading">
        Favorite SpaceX Launches
      </Atom.Text>
      <Organisms.CardGallery
        cards={favorites.map((launch) => ({
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
      <Atom.Box className="flex justify-center mt-8">
        <Atom.Button variant="primary" className="cursor-pointer" onClick={handleClearFavorites}>
          <Trash className="w-5 h-5" />
          Eliminar Todos
        </Atom.Button>
      </Atom.Box>
    </Atom.Box>
  );
}

export default Favorites;
