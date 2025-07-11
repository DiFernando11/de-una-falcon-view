import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from '.';

describe('<Box />', () => {
  it('should match snapshot', () => {
    // Arrange
    const content = <span>Hola mundo</span>;
    // Act
    const { asFragment } = render(<Box>{content}</Box>);
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    // Arrange
    const content = <span>Hola mundo</span>;
    // Act
    render(<Box>{content}</Box>);
    // Assert
    expect(screen.getByText('Hola mundo')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    // Arrange
    const className = 'test-class';
    const content = 'Contenido';
    // Act
    render(<Box className={className}>{content}</Box>);
    const div = screen.getByText(content);
    // Assert
    expect(div).toHaveClass(className);
  });

  it('should pass other props to the div', () => {
    // Arrange
    const testId = 'box-test';
    const ariaLabel = 'box-label';
    const content = 'Prueba';
    // Act
    render(
      <Box data-testid={testId} aria-label={ariaLabel}>
        {content}
      </Box>
    );
    const box = screen.getByTestId(testId);
    // Assert
    expect(box).toHaveAttribute('aria-label', ariaLabel);
  });
});
