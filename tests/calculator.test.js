var calculator = require('../calculator');

test('adds 1 + 2 and returns 3', ()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test('subtracts 1 from 2 and returns 1', ()=>{
    expect(calculator.subtract(2,1)).toBe(1);
});

test('multiplys 2 by 2 and returns 4', ()=>{
    expect(calculator.multiply(2,2)).toBe(4);
});

test('multiplys 4 by 2 and returns 2', ()=>{
    expect(calculator.division(4,2)).toBe(2);
});
