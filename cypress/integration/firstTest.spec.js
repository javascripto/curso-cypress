/// <reference types="cypress" />

class Calculator {
  static sum(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
}

describe('Calculator', () => {

  describe('should sum two numbers', () => {
    it('should sum 1 + 1', () => {
      expect(Calculator.sum(1, 1)).eq(2);
    });
    it('should sum 3 + 5', () => {
      expect(Calculator.sum(3, 5)).eq(8);
    });
    it.skip('should sum 3 numbers', () => {      
      expect(Calculator.sum(1, 2, 3)).eq(6);
    });
  });

  describe('should test subtract method', () => {
    it('should subtract 2 from 10', () => {
      expect(Calculator.subtract(10, 2)).eq(8);
    });
  });

});
