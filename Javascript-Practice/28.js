// object inside array

const users = [
    {userId: 1, firstName: 'John', lastName: 'Thakur'},
    {userId: 2, firstName: 'John2', lastName: 'Thakur1'},
    {userId: 1, firstName: 'John3', lastName: 'Thakur2'}
]
// console.log(users)

for(let user of users) {
    console.log(user.firstName)
}