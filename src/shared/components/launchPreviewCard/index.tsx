import { Rocket, ArrowRight, Star } from 'lucide-react';
import { Atom } from '@/shared/ui';
import clsx from 'clsx';
import type { LaunchPreviewCard } from './types';

const LaunchPreviewCard = ({
  launch,
  isFavorite,
  handleAddOrRemoveFavoriteLaunch,
  onClick,
}: LaunchPreviewCard) => {
  return (
    <Atom.Box
      onClick={onClick}
      className="flex flex-col items-center gap-4 cursor-pointer"
      role="button"
      tabIndex={0}
    >
      <Atom.Box className="flex gap-2 items-center">
        <Rocket className="w-8 h-8 text-accent-500" />
        <Atom.Text textType="heading" as="h3">
          {launch.missionName}
        </Atom.Text>
        <ArrowRight className="w-4 h-4 ml-1" />
      </Atom.Box>
      <Atom.Box className="flex w-full gap-2 justify-center items-center">
        <Atom.Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            handleAddOrRemoveFavoriteLaunch();
          }}
        >
          <Atom.Text className="flex items-center gap-1">
            <Star
              className={clsx('w-5 h-5', isFavorite ? 'text-primary-500' : 'text-gray-400')}
              fill={isFavorite ? 'currentColor' : 'none'}
              strokeWidth={2}
            />
            {isFavorite ? 'Favorito' : 'Agregar a favoritos'}
          </Atom.Text>
        </Atom.Button>
      </Atom.Box>
    </Atom.Box>
  );
};

export default LaunchPreviewCard;
