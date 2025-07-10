import { cva } from 'class-variance-authority';

export const cardRecipe = cva(
  [
    'rounded-2xl',
    'p-6',
    'transition-all',
    'relative',
    'overflow-hidden',
    'shadow-lg',
    'bg-gradient-to-br',
    'border',
    'cursor-pointer',
    'card-hover',
  ],
  {
    variants: {
      theme: {
        default: 'bg-white border-gray-200 text-black',
        glassDark: 'glassBlurDark',
        glassWhite: 'glassBlurWhite',
      },
    },
    defaultVariants: {
      theme: 'glassDark',
    },
  }
);
