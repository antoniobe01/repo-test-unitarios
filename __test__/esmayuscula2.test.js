const isUpperCase = require('../utils/esmayuscula');

describe('isUpperCase', () => {
    test.each`
      Palabra    | Resultadoesperado    
      ${'HOLA'}  | ${true}
      ${'hola'}  | ${false}
      ${'Hola'}  | ${false}
    `('should return $Resultadoesperado for input $Palabra', ({Palabra, Resultadoesperado}) => {
      expect(isUpperCase(Palabra)).toBe(Resultadoesperado);
    });
  });
   