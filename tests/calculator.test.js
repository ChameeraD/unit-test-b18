var calculator = require('../calculator');

test("add 1 and 2 and returns 3", () => {
    expect(calculator.add(1,2)).toBe(3);
});


test("substract from 2 to 1 and returns 1", () => {
    expect(calculator.subtract(2,1)).toBe(1);
});


test("multiply 1 and 2 and returns 2", () => {
    expect(calculator.multiply(1,2)).toBe(2);
});


test("divide 4 by 2 and returns 2", () => {
    expect(calculator.division(4,2)).toBe(2);
});