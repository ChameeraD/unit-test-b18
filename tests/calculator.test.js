// Importing the file
var calculator = require("../calculator");

describe("Calculator tests", () => {
  test("add 1 and 2 should return 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("Subract 5 and 3 should return 2", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("multiply 1 and 2 should return 2", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test("Divide 6 and 2 should return 3", () => {
    expect(calculator.division(6, 2)).toBe(3);
  });
});
