
var calculator = require('../calculator');

test("adds 1 and 2 and returns 3",()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test("sub 3 and 2 and returns 1",()=>{
    expect(calculator.add(3,2)).toBe(1);
});

test('multiplys 6 by 3 and returns 18', ()=>{
    expect(calculator.multiply(6,3)).toBe(18);
});

test('multiplys 10 by 2 and returns 2', ()=>{
    expect(calculator.division(10,2)).toBe(5);
});



