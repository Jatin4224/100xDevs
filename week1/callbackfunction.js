//loops,functions and callback in js

// calculate the sum from 0 to 100

//dumb way
// let ans = 1+2+3.......................+100;
// console.log(ans)

//right way
// let ans = 0;
// for (let i = 1; i <= 100; i++) {
//   ans = ans + i;
// }
// console.log(ans);

//what is function
// a function in js is set of statements that performs a taask or calculate a value
// it should take some input and return an output where there is some obvious relationship between the input and the output

// syntax  - how to declare a function
// function findsum(n) {
//   let ans = 0;
//   for (let i = 1; i < n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

//another example
// function sum (a, b) {
//   return a+b;
// }

//how to call a function

// function findsum(n) {
//   let ans = 0;
//   for (let i = 1; i < n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

//calling fun

// let ans = findsum(10);
// console.log(ans);

//callback functions

// step 1 - can u call one function inside another function?

// function square(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }
// function sumOfSquares(a, b) {
//   const val1 = square(a);
//   const val2 = square(b);
//   return val1 + val2;
// }

// function sumOfcube(a, b) {
//   const val1 = cube(a);
//   const val2 = cube(b);
//   return val1 + val2;
// }
// const ans = sumOfcube(2, 2);
// console.log(ans);

//repeating violating  the DRY rule.

//writing same using callback

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b, callback) {
  console.log(a);
  console.log(callback);
  const val1 = callback(a);
  const val2 = callback(b);
  return val1 + val2;
}

// const ans = sumOfSomething(2, 2, square);

// console.log(ans);
const ans = sumOfSomething(2, 2, cube);

console.log(ans);

//anonymouse functions
