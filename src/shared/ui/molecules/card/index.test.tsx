import { render, screen } from '@testing-library/react';
import Card from './index';
import '@testing-library/jest-dom';

describe('<Card />', () => {
  it('should render children correctly', () => {
    // Arrange
    const content = 'Contenido de la card';
    // Act
    render(<Card>{content}</Card>);
    // Assert
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    // Arrange
    const content = 'Snapshot Card';
    // Act
    const { asFragment } = render(<Card theme="default">{content}</Card>);
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
