import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { alertRecipe } from './recipe';
import { Info, AlertCircle } from 'lucide-react';
import Box from '../../atoms/box';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'info' | 'error';
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const iconMap = {
  info: <Info className="w-6 h-6 text-blue-400 flex-shrink-0" />,
  error: <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />,
};

const Alert: React.FC<AlertProps> = ({ type = 'info', title, children, className, ...rest }) => (
  <Box className={twMerge(alertRecipe({ type }), className)} {...rest}>
    {iconMap[type]}
    <Box>
      {title && (
        <Box
          className={clsx(
            'font-bold',
            type === 'info' && 'text-blue-700',
            type === 'error' && 'text-red-700'
          )}
        >
          {title}
        </Box>
      )}
      <Box className="text-sm">{children}</Box>
    </Box>
  </Box>
);

export default Alert;
