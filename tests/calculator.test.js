var calculator = require("../calculator");

//Add 1 and 2
test("Add 1 and 2 and return 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

//Substract 4 and 2
test("Substract 4 and 2 and return 2", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

//Multiply 4 and 2
test("Multiply 4 and 2 and return 8", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

//Devide 4 from 2
test("Devide 4 from 2 and return 2", () => {
  expect(calculator.division(4, 2)).toBe(2);
});
