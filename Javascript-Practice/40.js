// call back function

function myFun2(name) {
  console.log("Inside my upper function");
  console.log(`My name is ${name}`);
}

function myFun(callback) {
  console.log("Inside my lower function");
  callback("Komal");
}

myFun(myFun2);