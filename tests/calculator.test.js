var calculator = require('../calculator');

test("add 3 and 5 and return 8", () => {
    expect(calculator.add(3, 5)).toBe(8);
});


test("sub 5 and 5 and return 0", () => {
    expect(calculator.subtract(5, 5)).toBe(0);
});


test("mult 10 and 10 and return 100", () => {
    expect(calculator.multiply(10, 10)).toBe(100);
});




test("div 100 and 10 and return 10", () => {
    expect(calculator.division(100, 10)).toBe(10);
});