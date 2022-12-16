// map method
//map store new array every time

const number = [3,4,5,6,7,8]

const square = function(number){
    return number * number
}

const squareNumber = number.map(square)
console.log(squareNumber)

//or with arrow function

const squareNumber1 = number.map((number)=>{
    return number * number
})
console.log(squareNumber1)

const users = [
    {firstName: 'John', lastName: 'Levie'},
    {firstName: 'Komal', lastName: 'Thakur'}
]

const userName = users.map((user)=>{
    return user.firstName
})
console.log(userName)