import { render, screen } from '@testing-library/react';
import CardGallery from './index';
import type { CardProps } from '../../molecules/card/types';

const exampleCards: CardProps[] = [
  {
    id: 'card-1',
    theme: 'glassDark',
    children: <span>Card 1</span>,
  },
  {
    id: 'card-2',
    theme: 'glassWhite',
    children: <span>Card 2</span>,
  },
  {
    id: 'card-3',
    theme: 'glassDark',
    children: <span>Card 3</span>,
  },
];

describe('<CardGallery />', () => {
  it('should render the correct number of cards', () => {
    // Arrange & Act
    render(<CardGallery cards={exampleCards} minCardWidth={200} />);
    // Assert
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Card 3')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    // Arrange & Act
    const { asFragment } = render(<CardGallery cards={exampleCards} minCardWidth={180} />);
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
