// reduce

const numbers = [1,2,3,4,5,6,7,8]

const sum = numbers.reduce((previousValue, currentValue) =>{
    return  previousValue + currentValue
})
console.log(sum)