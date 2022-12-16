let age = 25
let firstName = "Komal"

console.log(typeof age) // number
console.log(typeof firstName) //string

// convert no to string

console.log(typeof (age + "")) //string

age = age + ""
console.log(typeof(age)) //string
console.log(age)  // "25"

age = age + "ashhar"
console.log(typeof(age)) //string
console.log(age)  // "25ashhar"

// convert string to number

let num = + "25"
console.log(typeof num)

let num1 = Number("30")
console.log(typeof num1)