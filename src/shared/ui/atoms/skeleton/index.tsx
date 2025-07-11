import { twMerge } from 'tailwind-merge';
import type { ReactNode, HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Skeleton = ({ children, className, ...rest }: SkeletonProps) => (
  <div className={twMerge('animate-pulse flex flex-col gap-4', className)} {...rest}>
    {children}
  </div>
);

export default Skeleton;
