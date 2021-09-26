var calculator = require('../calculator');


//Add function testing
test("add 1 and 2 returns 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

//Subtract function testing
test("subtract 5 and 3 returns 3", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});


//Multiply function testing
test("multiply 2 and 4 returns 8", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
});

//division function testing
test("divide 10 and 5 returns 2", () => {
    expect(calculator.division(10, 5)).toBe(2);
});


