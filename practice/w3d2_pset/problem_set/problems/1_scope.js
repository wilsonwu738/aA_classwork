// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/1_scope.js`

var foo = 5;

function bar() {
  foo = "Anthony";
  foo + " is home";
  return foo;
}

console.log(foo);   // What is foo on this line?   5
console.log(bar()); // What is bar() on this line?   Anthony 
console.log(foo);   // What is foo on this line?    ??why
