import React from 'react';
import { textRecipe } from './recipe';
import type { TextProps } from './types';

const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  textType,
  color,
  className,
  children,
  ...rest
}) => (
  <Component className={textRecipe({ textType, color, className })} {...rest}>
    {children}
  </Component>
);

export default Text;
