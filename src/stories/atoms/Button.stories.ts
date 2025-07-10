import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Atom } from '@shared/ui';

const meta: Meta<typeof Atom.Button> = {
  title: 'Atoms/Button',
  component: Atom.Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Atom.Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};
