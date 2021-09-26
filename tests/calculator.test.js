var calculator = require('../calculator');

test("adds 1 and 2 to return 3", () => {
    expect(calculator.add(1,2)).toBe(3);
});

test("subtract 4 and 2 to return 2", () => {
    expect(calculator.subtract(4,2)).toBe(2);
});

test("multiply 5 and 3 to return 15", () => {
    expect(calculator.multiply(5,3)).toBe(15);
});