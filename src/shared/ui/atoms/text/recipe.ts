import { cva } from 'class-variance-authority';

export const textRecipe = cva('', {
  variants: {
    textType: {
      heading: 'font-family-space font-bold text-3xl leading-tight',
      subtitle: 'font-family-space font-semibold text-xl leading-snug',
      body: 'font-family-space font-normal text-base leading-normal',
      caption: 'font-family-space font-light text-xs leading-snug uppercase tracking-wider',
      overline: 'font-family-space font-medium text-xs leading-none uppercase tracking-wide',
    },
    color: {
      primary: 'text-blue-600',
      secondary: 'text-gray-500',
      danger: 'text-red-600',
      success: 'text-green-600',
      inherit: 'text-inherit',
    },
  },
  defaultVariants: {
    textType: 'body',
    color: 'inherit',
  },
});
