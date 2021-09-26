var calculator = require('../calculator');

beforeAll(()=>{
    console.log("Before all");
});

afterAll(()=>{
    console.log("After all");
});


test("adds 1 and 2 and returns 3", () => {
    expect(calculator.add(1,2)).toBe(3);
  });

test("subtracts 5 and 2 and returns 3", () => {
    expect(calculator.subtract(5,2)).toBe(3);
  });

test("multiplies 100 and 2 and returns 200", () => {
    expect(calculator.multiply(100,2)).toBe(200);
  });

test("division 256 and 16 and returns 16", () => {
    expect(calculator.division(256,16)).toBe(16);
  });

  