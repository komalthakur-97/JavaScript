// how to clone an array of objects

let array = ["item","item2"]
// old way
let array2 = array.slice(0)
console.log(array2)
array.push("item3")
console.log(array)
console.log(array2)


//new way spread operator
let arraynew = [...array]
console.log(array)
console.log(arraynew)
array.push("item4")
console.log(array)
console.log(arraynew)