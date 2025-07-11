import type { LaunchAdapter, LaunchDetailAdapter } from '@/domain/models';

export interface LaunchDetailCardProps {
  launch?: LaunchDetailAdapter;
  isFavorite: boolean;
  handleAddOrRemoveFavoriteLaunch: (launch: LaunchAdapter) => void;
}
