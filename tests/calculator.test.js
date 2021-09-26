var calculator = require('../calculator');

// beforeEach(() => {
//     console.log("Before Each");
// });

// afterAll(() => {
//     console.log("After all");
// });

// test("two plus two is four", () => {
//     console.log("Test 01");
// });

// test("two plus two is four", () => {
//     console.log("Test 02");
// });

// test("two plus two is four", () => {
//     console.log("Test 03");
// });

test("add 1 and 2 and return 3", () => {
    expect(calculator.add(1,2)).toBe(3);
});

test("substract 2 from 3 and return 1", () => {
    expect(calculator.subtract(3,2)).toBe(1);
});

test("multiply 2 and 3 and return 6", () => {
    expect(calculator.multiply(2,3)).toBe(6);
});

test("divide 6 by 3 and return 2", () => {
    expect(calculator.division(6,3)).toBe(2);
});

