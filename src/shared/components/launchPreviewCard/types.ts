import type { LaunchAdapter } from '@/domain/models';

export interface LaunchPreviewCardProps {
  launch: LaunchAdapter;
  isFavorite: boolean;
  handleAddOrRemoveFavoriteLaunch: () => void;
  onClick: () => void;
}
