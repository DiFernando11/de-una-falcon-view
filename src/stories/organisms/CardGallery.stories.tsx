import type { Meta, StoryObj } from '@storybook/react';
import { Organisms } from '@/shared/ui';
import type { CardProps } from '@/shared/ui/molecules/card/types';

const meta: Meta<typeof Organisms.CardGallery> = {
  title: 'Organisms/CardGallery',
  component: Organisms.CardGallery,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Organisms.CardGallery>;

const simpleCards: CardProps[] = [
  {
    theme: 'glassDark',
    children: (
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-blue-400 text-xl">FalconSat</span>
        <button className="bg-white rounded px-4 py-1 text-black font-semibold">Acción</button>
      </div>
    ),
  },
  {
    theme: 'glassWhite',
    children: (
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-blue-800 text-xl">DemoSat</span>
        <button className="bg-white rounded px-4 py-1 text-black font-semibold">Acción</button>
      </div>
    ),
  },
  {
    theme: 'glassDark',
    children: (
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-blue-400 text-lg">Trailblazer</span>
        <button className="bg-white rounded px-4 py-1 text-black font-semibold">Acción</button>
      </div>
    ),
  },
];

const variedCards: CardProps[] = [
  {
    theme: 'glassWhite',
    children: (
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-blue-800 text-2xl">Starlink</span>
        <p className="text-xs">Constelación de satélites</p>
        <button className="bg-white rounded px-4 py-1 text-black font-semibold">Ver más</button>
      </div>
    ),
  },
  {
    theme: 'glassDark',
    children: (
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-blue-400 text-lg">RatSat</span>
        <button className="bg-white rounded px-2 py-1 text-black font-semibold">Action</button>
      </div>
    ),
  },
  {
    theme: 'glassDark',
    children: (
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-blue-400 text-xl">RazakSat</span>
        <button className="bg-white rounded px-6 py-2 text-black font-semibold">Launch</button>
      </div>
    ),
  },
  {
    theme: 'glassWhite',
    children: (
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-blue-800 text-lg">SpaceBee</span>
        <button className="bg-white rounded px-4 py-1 text-black font-semibold">More</button>
      </div>
    ),
  },
];

const manyCards: CardProps[] = Array.from({ length: 10 }).map((_, idx) => ({
  theme: (idx % 2 === 0 ? 'glassDark' : 'glassWhite') as CardProps['theme'],
  children: (
    <div className="flex flex-col items-center gap-2">
      <span className="font-bold text-blue-600 text-xl">{`Card #${idx + 1}`}</span>
      <button className="bg-white rounded px-4 py-1 text-black font-semibold">Acción</button>
    </div>
  ),
}));

export const ThreeCards: Story = {
  args: {
    cards: simpleCards,
    minCardWidth: 220,
    className: 'max-w-4xl mx-auto',
  },
  name: 'Renderizando 3 Cards',
};

export const FourVariedCards: Story = {
  args: {
    cards: variedCards,
    minCardWidth: 180,
    className: 'max-w-4xl mx-auto',
  },
  name: 'Cards variadas (4), diferente tamaño mínimo',
};

export const ManyCards: Story = {
  args: {
    cards: manyCards,
    minCardWidth: 140,
    className: 'max-w-5xl mx-auto',
  },
  name: 'Galería con 10 Cards',
};
