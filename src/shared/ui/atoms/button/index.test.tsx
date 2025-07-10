import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  it('should renders correctly with text', () => {
    // Arrange
    const label = 'Hola mundo';
    // Act
    render(<Button>{label}</Button>);
    // Assert
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
