// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/4_scope.js`

var bar = "dance";

function foo() {
  bar = 10;

  var innerFoo = function() {
    var bar = 15;
    function innerInnerFoo() {
      console.log(bar);
    }
    innerInnerFoo()
  }

  console.log("2: " + bar); //2: What will bar be on this line?  10
  innerFoo();
  console.log("3: " + bar); //3: What will bar be on this line?  10
}

console.log("1: " + bar); //1: What will bar be on this line? "dance"
foo();
console.log("4: " + bar); //4: What will bar be on this line? 15
