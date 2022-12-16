// objects { }
// object don't have index value

const person = {
    "first name":"komal", 
    age:25,
    hobbies: ["art","photography"] //we can store array in object
}
console.log(person)

 // how to access data from the objects
console.log(person.name)
console.log(person.age)
console.log(person.hobbies)

// how to add key value pairs to the object
person.gender = "fe-male"
console.log(person)

console.log(person['first name'])