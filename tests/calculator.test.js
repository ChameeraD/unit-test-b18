var calculator = require("../calculator");

test("adds 1 and 2 and returns 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("subtracts 2 from 10 and returns 8", () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});
test("multiplies 3 by 4 and returns 12", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});
test("divides 20 by 4 and returns 5", () => {
  expect(calculator.division(20, 4)).toBe(5);
});
