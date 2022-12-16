// find method

const myArray = ["Hey", "Komal", "Prachita"]

// function islength(string){
//     return string.length === 5
// }
//------------------or

const ans = myArray.find((string)=>string.length===5)
console.log(ans)


const users = [
    {firstName: 'John', lastName: 'Levie'},
    {firstName: 'Komal', lastName: 'Thakur'}
]

const myUsers = users.find((user) => user.lastName === 'Thakur')
console.log(myUsers)