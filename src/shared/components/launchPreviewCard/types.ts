import type { LaunchAdapter } from '@/domain/models';

export interface LaunchPreviewCard {
  launch: LaunchAdapter;
  isFavorite: boolean;
  handleAddOrRemoveFavoriteLaunch: () => void;
  onClick: () => void;
}
