//primitive data types
let num = 6
let num1 = num

console.log("value in num is", num)
console.log("value in num1 is", num1)

num++

console.log("after incrementing the value in num is", num)
console.log("value in num1 is", num1)


//reference data types (memory address)
//array and object

let array = ["item", "item2"]
let array2 = array
console.log("Array", array)
console.log("Array2", array2)
array.push("item3")
console.log("Array pushed one more item within", array)
console.log("Array2", array2)