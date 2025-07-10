import type { VariantProps } from 'class-variance-authority';
import type { cardRecipe } from './recipe';

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardRecipe> {
  children: React.ReactNode;
}
