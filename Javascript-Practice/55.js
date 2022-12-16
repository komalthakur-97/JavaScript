// METHODS

//function inside object

const person = {
    firstName: 'Komal',
    age: 25,
    about : function () {
        console.log(`My name is ${person.firstName} and my age is ${this.age}`);
        console.log(this) 
    }
}

person.about()

//this is person object here

//one more example 

function userInfo(){
    console.log(`My name is ${this.firstName} ${this.lastName}`)
}

const user = {
    firstName: 'Komal',
    lastName: 'Thakur',
    about: userInfo
}
user.about()

const user2 = {
    firstName: 'Prachita',
    lastName: 'Verma',
    about: userInfo
}
user2.about()

const user3 = {
    firstName: 'Samyukta',
    lastName: 'Naryana',
    about: userInfo
}
user3.about()