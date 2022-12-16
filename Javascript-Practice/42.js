// important array methods

const number = [2,5,8,3]

function multiplyBy2(number, index) {
    console.log("index is ", index)
    console.log(`${number}*2 = ${number*2}`)
}
for(let i = 0; i< number.length; i++) {
    multiplyBy2(number[i], i)
}

//for each
number.forEach(function(number){
    console.log(number*2)
})

//for of

const users = [
    {firstName: 'John', lastName: 'Levie'},
    {firstName: 'Komal', lastName: 'Thakur'}
]

for(let user of users){
    console.log(user.firstName)
}

//or with arrow function

users.forEach((user) =>{
    console.log(user.lastName)
    })