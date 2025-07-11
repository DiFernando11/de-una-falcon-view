import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  it('should match snapshot', () => {
    // Arrange
    const label = 'Botón snapshot';
    // Act
    const { asFragment } = render(<Button>{label}</Button>);
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with text', () => {
    // Arrange
    const label = 'Hola mundo';
    // Act
    render(<Button>{label}</Button>);
    // Assert
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    // Arrange
    const label = 'Con clase';
    const customClass = 'my-custom-class';
    // Act
    render(<Button className={customClass}>{label}</Button>);
    const btn = screen.getByText(label);
    // Assert
    expect(btn).toHaveClass(customClass);
  });

  it('should call onClick handler when clicked', () => {
    // Arrange
    const label = 'Haz click';
    const handleClick = jest.fn();
    // Act
    render(<Button onClick={handleClick}>{label}</Button>);
    const btn = screen.getByText(label);
    fireEvent.click(btn);
    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
