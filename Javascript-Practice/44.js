// filter method

const number = [3,4,5,6,7,8,9]
//input as callback function

const isEven =((number)=>{
    return number%2 === 0
})

const evenNumbers = number.filter(isEven)
console.log(evenNumbers)