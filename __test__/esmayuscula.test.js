const isUpperCase = require('../utils/esmayuscula');

test('Es mayuscula', () => {
    expect(isUpperCase('HOLA')).toBe(true);
});

test('Es mayuscula', () => {
    expect(isUpperCase('hola')).toBe(false);
});

test('Es mayuscula', () => {
    expect(isUpperCase('Hola')).toBe(false);
});