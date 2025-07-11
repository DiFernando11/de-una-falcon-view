import React from 'react';
import type { BoxProps } from './types';

const Box: React.FC<BoxProps> = ({ children, ...rest }) => <div {...rest}>{children}</div>;

export default Box;
