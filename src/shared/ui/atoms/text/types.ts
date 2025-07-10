import type { VariantProps } from 'class-variance-authority';
import { textRecipe } from './recipe';

type SpanAttributesWithoutColor = Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>;

export interface TextProps extends SpanAttributesWithoutColor, VariantProps<typeof textRecipe> {
  as?: React.ElementType;
  children: React.ReactNode;
}
