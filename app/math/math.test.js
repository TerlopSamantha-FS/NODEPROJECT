const math = require('./math');

describe('Math Module', () => {
    // Test the add function
    test('should return the correct sum', () => {
      expect(math.sum(2, 3)).toBe(5);
    });
  
    // Test the subtract function
    test('should return the correct difference', () => {
      expect(math.subtract(5, 2)).toBe(3);
    });
  
    // Test the multiply function
    test('should return the correct product', () => {
      expect(math.multiply(2, 3)).toBe(6);
    });
  
    // Test the divide function
    test('should return the correct quotient', () => {
      expect(math.divide(6, 3)).toBe(2);
    });

    // Test the sqrt function
  test('should return the correct square root', () => {
    expect(math.sqrt(4)).toBe(2);
  });

  // Test the max function
  test('should return the max of two numbers', () => {
    expect(math.max(2, 3)).toBe(3);
  });
});