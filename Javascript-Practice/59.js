//short syntax

const user = {
    firstName: 'John',
    age: 36,
    about(){
        console.log(this.firstName, this.age);
    }
}

user.about()