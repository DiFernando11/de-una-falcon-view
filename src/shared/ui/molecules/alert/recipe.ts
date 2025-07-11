import { cva } from 'class-variance-authority';

export const alertRecipe = cva(
  [
    'flex',
    'items-start',
    'gap-3',
    'rounded-xl',
    'p-4',
    'border-l-4',
    'shadow-md',
    'transition-all',
    'w-full',
    'bg-opacity-90',
  ],
  {
    variants: {
      type: {
        info: 'bg-blue-50 border-blue-400 text-blue-900',
        error: 'bg-red-50 border-red-400 text-red-900',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  }
);
