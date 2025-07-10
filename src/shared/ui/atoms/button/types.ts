import { type VariantProps } from 'class-variance-authority';
import type { buttonRecipe } from './recipe';

export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonRecipe>;
