import { Rocket, Star, Calendar, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { Atom, Molecules } from '@/shared/ui';
import clsx from 'clsx';
import type { LaunchDetailCardProps } from './types';
import { formatDate } from '@/shared/utils';

const LaunchDetailCard = ({
  launch,
  isFavorite,
  handleAddOrRemoveFavoriteLaunch,
}: LaunchDetailCardProps) => {
  if (!launch) return null;
  return (
    <Molecules.Card className="max-w-[600px] m-auto gap-4">
      <Atom.Box className="space-y-4">
        <Atom.Box className="flex items-center gap-3 mb-2">
          <Rocket className="w-10 h-10 text-accent-500" />
          <Atom.Text textType="heading" as="h2">
            {launch.missionName}
          </Atom.Text>
        </Atom.Box>
        {launch.patch && (
          <img
            src={launch.patch}
            alt={`${launch.missionName} mission patch`}
            className="h-24 w-24 object-contain rounded-lg shadow-md mb-2"
          />
        )}
        <Atom.Box className="flex items-center gap-2">
          {launch.upcoming ? (
            <>
              <AlertTriangle className="text-yellow-400 w-5 h-5" />
              <Atom.Text textType="body" color="secondary">
                Lanzamiento programado
              </Atom.Text>
            </>
          ) : launch.success ? (
            <>
              <CheckCircle className="text-green-400 w-5 h-5" />
              <Atom.Text textType="body" color="success">
                Lanzamiento exitoso
              </Atom.Text>
            </>
          ) : (
            <>
              <AlertTriangle className="text-red-500 w-5 h-5" />
              <Atom.Text textType="body" color="danger">
                Fallo en el lanzamiento
              </Atom.Text>
            </>
          )}
        </Atom.Box>
        <Atom.Box className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2 text-base">
            <Calendar className="w-5 h-5 text-blue-400" />
            <Atom.Text as="span" textType="body">
              {formatDate(launch.launchDate)}
            </Atom.Text>
          </div>
          <div className="flex items-center gap-2 text-base">
            <Rocket className="w-5 h-5 text-blue-400" />
            <Atom.Text as="span" textType="body">
              {launch.rocketName}
            </Atom.Text>
          </div>
        </Atom.Box>
        {launch.details && (
          <Atom.Text as="p" textType="body" className="text-center text-gray-200 mt-2">
            {launch.details}
          </Atom.Text>
        )}
        {launch.images && launch.images.length > 0 && (
          <Atom.Box className="flex flex-wrap gap-2 justify-center mt-2">
            {launch.images.slice(0, 3).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Foto lanzamiento ${idx + 1}`}
                className="h-24 w-24 object-cover rounded-md border border-gray-600"
                loading="lazy"
              />
            ))}
          </Atom.Box>
        )}
        {launch.article && (
          <a
            href={launch.article}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-600 inline-flex items-center gap-1 mt-4"
          >
            Ver artículo
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        <Atom.Box className="flex gap-3 mt-4 justify-center w-full cursor-pointer">
          <Atom.Button
            className="cursor-pointer"
            variant="outline"
            onClick={() =>
              handleAddOrRemoveFavoriteLaunch({
                id: launch.id,
                missionName: launch.missionName,
                launchDate: launch.launchDate,
                rocketName: launch.rocketName,
              })
            }
          >
            <Atom.Text className="flex items-center gap-1">
              <Star
                className={clsx('w-5 h-5', isFavorite ? 'text-primary-500' : 'text-gray-400')}
                fill={isFavorite ? 'currentColor' : 'none'}
                strokeWidth={2}
              />
              {isFavorite ? 'Favorite' : 'Add to favorites'}
            </Atom.Text>
          </Atom.Button>
        </Atom.Box>
      </Atom.Box>
    </Molecules.Card>
  );
};

export default LaunchDetailCard;
