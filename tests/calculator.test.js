var calculator = require('../calculator');

test('adds 1 and 2 and returns 3', ()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test('substract 5 from 10 and returns 5', ()=>{
    expect(calculator.subtract(10,5)).toBe(5);
});

test('multiply 5 by 3 and returns 15', ()=>{
    expect(calculator.multiply(5,3)).toBe(15);
});

test('divide 10 by 5 and returns 2', ()=>{
    expect(calculator.division(10,5)).toBe(2);
});