//Maps object (iterables)

//object iterables
// key will be in string or on symbols only
const person = {
    firstName: 'Komal',
    age : 25,
    1: "one"
}

// console.log(person.firstName)
// console.log(person["firstName"])
//console.log(person[1]) //it will take this as a string only

for(let key in person) {
    // console.log(typeof key)
}

//key value pair
const person2 = new Map();
person2.set('firstName', 'Komal')
person2.set('age',25)
console.log(person2)