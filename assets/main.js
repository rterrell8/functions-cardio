// 1. Write a function that returns the sum of any two integers passed as arguments
function addNumbers(numberOne, numberTwo) {
  let total = numberOne + numberTwo;
  console.log(total);
  return total;
}
addNumbers(8,14)
// 2. Write a function that returns the difference of the second argument from the first
function subtractNumbers(numberOne, numberTwo) {
  let total = numberTwo - numberOne;
  console.log(total);
  return total;
}
subtractNumbers(8,14)
// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`
function greetPerson(x) {
  let greeting = `hello ${x}`;
  console.log(greeting);
  return greeting;
}
greetPerson(Homer)
// 4. Write a function that returns the product of any argument
// multiplied by itself.
function multiplyNumbers(x,y){
  let product = x * y;
  console.log(product);
  return product;
}
multiplyNumbers(8,14)
// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions
// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥
function math(l,w,h){
  volume = l * w* h;
  console.log(volume);
  return volume;
}
math(10,8,14)
