import type { CardProps } from '../../molecules/card/types';

export interface CardGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: CardProps[];
  minCardWidth?: number;
  className?: string;
}
