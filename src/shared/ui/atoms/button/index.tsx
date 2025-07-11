import { twMerge } from 'tailwind-merge';
import React from 'react';
import { buttonRecipe } from './recipe';
import type { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  return <button className={twMerge(buttonRecipe({ variant, size }), className)} {...props} />;
};

export default Button;
