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

  test('returns -2 for subtracting 2 from 0', ()=>{
    const expected = -2;
    const actual = subtract(0, 2);
    expect(actual).toBe(expected);
  })

  test('returns 10 for subtracting a negative number from 20', ()=> {
    const expected = 30;
    const actual = subtract(20, -10);
    expect(actual).toBe(expected);
  });

  test('returns NaN for subtracting a non-numeric value', ()=>{
    const result = subtract("abc", 2);
    expect(isNaN(result)).toBe(true);
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

  test('returns 0 for multiplying any number by 0', () =>{
    const expected = 0;
    const actual = multiply(123, 0);
    expect(actual).toBe(expected);
  });

  test('returns a negative result for multiplying a positive and a negative number', () =>{
    const expected = -15;
    const actual = multiply(5, -3);
    expect(actual).toBe(expected);
  });

  test('returns NaN for multiplying a number by a non-numeric value', ()=>{
    const result = multiply(10, 'abc');
    expect(isNaN(result)).toBe(true);
  });

});

describe('divide', () => {
  test('can divide numbers', ()=>{
    const expected = 3;
    const actual = divide(33, 11);
    expect(actual).toBe(expected);
  });

  test('returns 0.5 for 1 divided by 2', ()=>{
    const expected = 0.5;
    const actual = divide(1, 2);
    expect(actual).toBe(expected);
  });

  test('returns -3 for -6 divided by 2', ()=>{
    const expected = -3;
    const actual = divide(-6, 2);
    expect(actual).toBe(expected);
  });

  test('returns Infinity for 5 divided by 0', ()=>{
    const expected = Infinity;
    const actual = divide(5, 0);
    expect(actual).toBe(expected);
  });

  test('returns -Infinity for -8 divided by 0', ()=>{
    const expected = -Infinity;
    const actual = divide(-8, 0);
    expect(actual).toBe(expected);
  });

  test('returns NaN for division by non-numeric value', ()=>{
    const result = divide(5, "abc");
    expect(isNaN(result)).toBe(true);
  });
});


describe('modulus', () => { 
  test('can modulus 2 small numbers', ()=>{
    const expected = 1;
    const actual = modulus(5, 2);
    expect(actual).toBe(expected);
  });

  test('can modulus 2 large numbers', ()=>{
    const expected = 3;
    const actual = modulus(28, 5);
    expect(actual).toBe(expected);
  });

  test('returns 1 for 5 % 2', ()=>{
    const result = modulus(5, 2);
    expect(result).toBe(1);
  });

  test('returns 3 for 17 % 7', ()=>{
    const result = modulus(17, 7);
    expect(result).toBe(3);
  });

  test('throws error for modulus with divisor 0', () => {
    expect(() => modulus(10, 0)).toThrowError("Modulus operation with divisor 0 is undefined");
  });

});

describe('even', () => {
  test('returns true for even number', ()=>{
    const result = even(4);
    expect(result).toBe(true);
  });

  test('returns false for odd number', ()=>{
    const result = even(7);
    expect(result).toBe(false);
  });

  test('returns true for zero', ()=>{
    const result = even(0);
    expect(result).toBe(true);
  });

  test('returns true for negative even number', ()=>{
    const result = even(-6);
    expect(result).toBe(true);
  });

  test('returns false for negative odd number', ()=>{
    const result = even(-3);
    expect(result).toBe(false);
  });

});

describe('odd', () => {
  test('returns true  for odd number', ()=>{
    const result = odd(3);
    expect(result).toBe(true);
  });

  test('returns false for even number', ()=>{
    const result = even(2);
    expect(result).toBe(true);
  });

  test('returns true for zero', ()=>{
    const result = odd(0);
    expect(result).toBe(false);
  });

  test('returns true for negative odd number', ()=>{
    const result = odd(-7);
    expect(result).toBe(true);
  });

  test('returns false for negative even number', ()=>{
    const result = odd(-22);
    expect(result).toBe(false);
  });
});
