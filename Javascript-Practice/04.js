// template string 
let age = 25
let firstName = "Komal Thakur"

// My name is Komal Thakur and I am 25 years old.
let fullIntro = "My name is " + firstName + " and I am "  + age + " years old." // concat
console.log(fullIntro)

let fullIntro1 = `My name is ${firstName} and I am ${age} years old.`
console.log(fullIntro1) // template string