// how to iterate object

const person = {
    "first name":"komal", 
    age:25,
    hobbies: ["art","photography"] //we can store array in object
}

//for in loop
// object.keys

for(let key in person) {
    // console.log(typeof(`${key} : ${person[key]}`))
    // console.log(typeof(key, ":", person[key]))
}

console.log(typeof (Object.keys(person)))
const value = Array.isArray((Object.keys(person)))
console.log(value)
console.log((Object.keys(person)))