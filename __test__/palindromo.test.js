const palindromo = require('../utils/palindromo');

test("girar palabra",() => {
    expect(palindromo("amor")).toBe("roma");
})

test("Cadena de numeros",() => {
    expect(palindromo("12345")).toBe("54321");
})

test("girar letra",() => {
    expect(palindromo("A")).toBe("A");
})