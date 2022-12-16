// block scope 

{
    let firstName = "Komal"
    console.log(firstName)
}

//function scope

{
    var firstName = "Komal Thakur"
}

console.log(firstName)

//functional scope  ---> the variable defined inside the function. The 'var' keyword is used to define the variable in the function scope
//block scope ---> the variable defined inside '{}' block scope ---> the variable defined

//let and const is block scope
//var is functional scope