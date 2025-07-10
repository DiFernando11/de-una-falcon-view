import { Atom } from '@/shared/ui';
import type { RootState } from '@/store';
import { clearFavorites } from '@/store/favoritesSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  return (
    <div className="text-primary">
      {favorites?.map((launch) => (
        <li key={launch.id}>
          <strong>{launch.missionName}</strong> ({launch.rocketName}) – {launch.launchDate}
        </li>
      ))}
      <Atom.Button onClick={() => dispatch(clearFavorites())}>Eliminar Todos</Atom.Button>
    </div>
  );
}

export default Favorites;
