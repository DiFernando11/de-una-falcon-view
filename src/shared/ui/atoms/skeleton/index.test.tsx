import { render, screen } from '@testing-library/react';
import Skeleton from '.';

describe('<Skeleton />', () => {
  it('should render children correctly', () => {
    // Arrange
    const content = <span>Loading...</span>;
    // Act
    render(<Skeleton>{content}</Skeleton>);
    // Assert
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
