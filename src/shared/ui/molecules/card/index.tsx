import React from 'react';
import { twMerge } from 'tailwind-merge';
import Box from '../../atoms/box';
import { cardRecipe } from './recipe';
import type { CardProps } from './types';

const Card: React.FC<CardProps> = ({ children, className, theme, ...rest }) => (
  <Box className={twMerge(cardRecipe({ theme }), className)} {...rest}>
    {children}
  </Box>
);

export default Card;
