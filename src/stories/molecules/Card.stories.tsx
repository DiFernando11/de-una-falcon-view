import { Atom, Molecules } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Molecules.Card> = {
  title: 'Molecules/Card',
  component: Molecules.Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['glassDark', 'glassWhite', 'default'],
    },
  },
  args: {
    children: (
      <Atom.Box>
        <Atom.Text textType="heading" as="h3">
          🚀 Falcon Launch
        </Atom.Text>
        <Atom.Text textType="body">Misión SpaceX. Experiencia en glass card.</Atom.Text>
      </Atom.Box>
    ),
    theme: 'glassDark',
  },
};

export default meta;

type Story = StoryObj<typeof Molecules.Card>;

export const GlassDark: Story = {
  args: {
    theme: 'glassDark',
  },
};

export const GlassWhite: Story = {
  args: {
    theme: 'glassWhite',
  },
};

export const Default: Story = {
  args: {
    theme: 'default',
  },
};
