// lexical scope  ---> "children scope have access to the variable in parent scope"

const myVar = "outside"
function myApp() {
  const myVar = "value12131313";
  function myFunction() {
    const myVar = "121121";
    console.log("inside fxn", myVar);
  }
  console.log(myVar);
  myFunction();
}
myApp();