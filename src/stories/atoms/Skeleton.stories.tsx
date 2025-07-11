import type { Meta, StoryObj } from '@storybook/react';
import { Atom } from '@shared/ui';

const meta: Meta<typeof Atom.Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Atom.Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Atom.Skeleton>;

export const CardLoader: Story = {
  name: 'Card Loader',
  args: {
    className: 'flex flex-col items-center gap-4 p-4 w-full max-w-xs',
    children: (
      <>
        <Atom.Box className="bg-skeleton h-7 w-5/6 rounded mb-4" />
        <Atom.Box className="bg-skeleton h-5 w-3/6 rounded mb-2" />
        <Atom.Box className="bg-skeleton h-4 w-1/2 rounded mb-4" />
        <Atom.Box className="bg-skeleton h-8 w-5/6 rounded" />
      </>
    ),
  },
};

export const AvatarWithText: Story = {
  name: 'Avatar with text',
  args: {
    className: 'flex items-center gap-4 p-4 w-full max-w-xs',
    children: (
      <>
        <Atom.Box className="bg-skeleton h-12 w-12 rounded-full" />
        <Atom.Box className="flex flex-col gap-2 flex-1">
          <Atom.Box className="bg-skeleton h-5 w-2/3 rounded" />
          <Atom.Box className="bg-skeleton h-4 w-1/2 rounded" />
        </Atom.Box>
      </>
    ),
  },
};

export const MultilineText: Story = {
  name: 'Multiline Text Loader',
  args: {
    className: 'flex flex-col gap-2 w-full max-w-xs p-4',
    children: (
      <>
        <Atom.Box className="bg-skeleton h-5 w-4/5 rounded" />
        <Atom.Box className="bg-skeleton h-5 w-5/6 rounded" />
        <Atom.Box className="bg-skeleton h-5 w-3/4 rounded" />
        <Atom.Box className="bg-skeleton h-5 w-2/3 rounded" />
      </>
    ),
  },
};
