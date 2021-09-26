var calculator = require('../calculator');


beforeEach(() => {
    console.log("before each")
});

afterAll(() => {
    console.log("before each")
});

describe("test group 1", () => {
    test("2 + 2 and return 4", () => {
        expect(calculator.add(2, 2).toBe(4))
        console.log("test 1")
    });
})

describe("test group 2", () => {
    test("3 multiply 4 should 12", () => {
        expect(calculator.multiply(3, 4).toBe(19))
    });
})

describe("test group 3", () => {
    test("4 division 4 should 12", () => {
        expect(calculator.division(4, 4).toBe(12))
    });
})

describe("test group 4", () => {
    test("5 substract 2 should 3", () => {
        expect(calculator.subtract(5,2).toBe(3))
    });
})