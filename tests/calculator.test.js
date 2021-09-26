var calculator = require('../calculator');

test("Adds 1 and 2 and return 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("Subtracts 5 and 2 and return 3", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test("Multiplies 4 and 3 and return 12", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});

test("Divides 10 and 2 and return 5", () => {
    expect(calculator.division(10, 2)).toBe(5);
});
