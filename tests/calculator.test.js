var calculator = require("../calculator");

test("adds 1 and 2 and return 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts 4 from 2 and return 2", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("multiplies by and 3 and return 15", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("divide 15 by 3 and return 5", () => {
  expect(calculator.division(15, 3)).toBe(5);
});
