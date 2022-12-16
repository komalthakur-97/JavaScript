// Sets (sets are iterable)
// it also store data
// it also have it's own methods
// no index-based access to the
// order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set([1, 1, 2, 2, 2, 3, 3])
console.log(numbers)

//forof loop
for (let number of numbers) {
    console.log(number)
}

const newNum = new Set()
newNum.add(1)
newNum.add(1)
console.log(newNum)

const newEx = new Set()
//here it will store both as both have different memory address
newEx.add(['item', 'item1'])
newEx.add(['item', 'item1'])
console.log(newEx)

//check wether we have that value or not
const newSet = new Set()
newSet.add(1)
newSet.add(1)
if(newSet.has(1)){
    console.log("1 is present")
    }else{
        console.log("1 is not present")
}

const myArray = [1, 2, 2, 3, 4, 5, 6, 6, 6]
const uniqueElement = new Set(myArray)
console.log(uniqueElement)
console.log(myArray)


let length = 0
for(let element of uniqueElement){
    length ++
}
console.log(length)