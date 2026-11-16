const palindromo = require('../utils/palindromo');

describe('palindromo', () => {
    test.each`
      Palabra    | Resultadoesperado    
      ${'AMOR'}  | ${'ROMA'}
      ${'12345'} | ${'54321'}
      ${'A'}     | ${'A'}
    `('should return $Resultadoesperado for input $Palabra', ({Palabra, Resultadoesperado}) => {
      expect(palindromo(Palabra)).toBe(Resultadoesperado);
    });
  });