// optional chaining

const user = {
    firstName: 'Komal',
}

console.log(user.firstName)
// console.log(user.address.houseNumber) -> this one will throw the error because it is looking for value that is in undefined
console.log(user?.address?.houseNumber)
// it will give you the undefined value
console.log(user.address)