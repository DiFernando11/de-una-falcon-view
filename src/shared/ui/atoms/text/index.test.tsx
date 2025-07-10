import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '.';

describe('<Text />', () => {
  it('should match snapshot', () => {
    // Arrange
    const content = 'Texto snapshot';
    // Act
    const { asFragment } = render(
      <Text textType="heading" color="danger" as="h1">
        {content}
      </Text>
    );
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    // Arrange
    const content = 'Hola mundo';
    // Act
    render(<Text>{content}</Text>);
    // Assert
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should apply the primary color variant', () => {
    // Arrange
    const content = 'Texto azul';
    // Act
    render(<Text color="primary">{content}</Text>);
    const element = screen.getByText(content);
    // Assert
    expect(element).toHaveClass('text-blue-600');
  });
});
