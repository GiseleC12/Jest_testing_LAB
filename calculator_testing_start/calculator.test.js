const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    const expected = 5;
    const actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 700;
    const actual = sum(300, 400);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    const expected = -900;
    const actual = sum(-600, -300);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    const expected = 1;
    const actual = sum(0, 1);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract 2 small numbers', ()=>{
    const expected = 8;
    const actual = subtract(12, 4);
    expect(actual).toBe(expected);
  });

  test('can substarct 2 large numbers', ()=>{
    const expected = 123;
    const actual = subtract(250, 127);
    expect(actual).toBe(expected);
  });

  test('can subtract two equal numbers', ()=> {
    const expected = 0;
    const actual = subtract(5, 5);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply 2 small numbers', ()=>{
    const expected = 9;
    const actual = multiply(3, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply 2 large numberss', ()=>{
    const expected = 6127820;
    const actual = multiply(1345, 4556);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {
  test('can divide 2 small numbers', ()=>{
    const expected = ;
    const actual = divide();
    expected(actual).toBe(expected);
  });

  test('can divide 2 large numbers', ()=>{
    const expected =99;
    const actual = divide(6534, 66);
    expected(actual).toBe(expected);
  });

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
