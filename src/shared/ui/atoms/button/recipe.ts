import { cva } from 'class-variance-authority';

export const buttonRecipe = cva(
  'inline-flex items-center justify-center gap-2 rounded transition-all font-semibold',
  {
    variants: {
      variant: {
        primary: 'bg-secondary-500 text-white hover:bg-secondary-600',
        secondary: 'bg-gray-200 text-black hover:bg-gray-300',
        outline: 'text-gray-700 text-white bg-transparent',
      },
      size: {
        sm: 'text-sm px-3 py-1',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
