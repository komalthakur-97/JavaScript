//nested destructuring
const users = [
    {userId: 1, firstName: 'John', lastName: 'Thakur'},
    {userId: 2, firstName: 'John2', lastName: 'Thakur1'},
    {userId: 1, firstName: 'John3', lastName: 'Thakur2'}
]

const [{firstName}, user2, user3] = users;
console.log(firstName)
console.log(user2)