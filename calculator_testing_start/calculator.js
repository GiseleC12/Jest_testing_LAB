const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};


const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    return a/b;
};

const modulus = function(a, d){
   if (d === 0){
    throw new Error("Modulus operation with divisor 0 is undefined");
   } 
   return a % d;
}

const even = function(a){
    return a % 2 === 0;
};

const odd = function(b){
    return b % 2 !==0;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
