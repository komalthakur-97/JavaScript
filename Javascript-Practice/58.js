// arrow function **************************

const user = {
    firstName : 'John',
    age : 34,
    about : () => {
        console.log(this.firstName,this.age) // this will return undefined
    }
}

user.about(user )

//arrow function "this" will return one step above function
//this refers to the object only

function user1(){
    firstName = 'John'
    console.log(this.firstName) 
    const user3 = {
        firstName : 'John',
        about : () => {
            console.log(this.firstName) 
        }
    }
    
    user3.about(user3 )
}

user1()