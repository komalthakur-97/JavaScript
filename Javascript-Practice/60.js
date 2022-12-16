//function 1. that create object 2. add key value pair 3. return object

const userMethod = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = {}
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.age = age
    user.address = address
    user.about = userMethod.about
    user.is18 = userMethod.is18
    return user
}
const userDisplay = createUser('Komal', 'Thakur', 'komal@xyz.com', 25, 'My address, Street, State')
console.log(userDisplay.about())
console.log(userDisplay.is18())


////----------->improved code

const userMethod2 = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return 'an na anaa a a naanaan aa  anana '
    }
}

function createUser1(firstName, lastName, email, age, address){
    const user = {}
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.age = age
    user.address = address
    user.about = userMethod2.about
    user.is18 = userMethod2.is18
    user.sing = userMethod2.sing
    return user
}
const userDisplay1 = createUser1('Komal', 'Thakur', 'komal@xyz.com', 25, 'My address, Street, State')
console.log(userDisplay1.about())
console.log(userDisplay1.is18())
console.log(userDisplay1.sing())