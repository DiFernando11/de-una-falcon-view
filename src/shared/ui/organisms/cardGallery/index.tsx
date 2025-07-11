import React from 'react';
import { twMerge } from 'tailwind-merge';
import Card from '../../molecules/card';
import Box from '../../atoms/box';
import type { CardGalleryProps } from './types';

const CardGallery: React.FC<CardGalleryProps> = ({
  cards,
  minCardWidth = 200,
  className,
  ...rest
}) => (
  <Box
    className={twMerge(`flex gap-2 flex-wrap justify-center items-stretch w-full`, className)}
    {...rest}
  >
    {cards.map((cardProps, idx) => (
      <Box
        style={{ minWidth: minCardWidth }}
        key={idx}
        className={twMerge(`flex-1 w-full flex flex-col`)}
      >
        <Card {...cardProps} className="flex-1" />
      </Box>
    ))}
  </Box>
);

export default CardGallery;
