import { formatDate } from '.';

describe('formatDate', () => {
  it('should format ISO string to expected date', () => {
    // Arrange
    const iso = '2007-03-21T01:10:00.000Z';
    // Act
    const result = formatDate(iso);
    // Assert
    expect(result).toBe('21 mar 2007, 01:10 UTC');
  });

  it('should return "Invalid Date UTC" for an invalid date', () => {
    // Arrange
    const iso = 'invalid-date';
    // Act
    const result = formatDate(iso);
    // Assert
    expect(result).toBe('Invalid Date UTC');
  });
});
