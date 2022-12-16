// spread operator array

const array = [1,2,1,2,5,6]
const array2 = [5,8,5,6,9,5]

const newArray = [...array, ...array2]
console.log(newArray)
const arrayNew = [..."545644354454"]
console.log(arrayNew)

// spread operator object
const obj1 = {
   key1 : "val1",
   key2 : "val2"
}
console.log(obj1)
const obj2 = {
   key1 : "val1",
   key3 : "val3",
   key1 : "valnew"
}
console.log(obj2)

const newObject = {...obj1, ...obj2}
console.log(newObject)