//********************call****************

function hello(){
    console.log("hello world")
}
hello.call()


//-----------------example----------------

const user = {
    firstName : 'John',
    age : 34,
    about : function(hobby, favmusic){
        console.log(this.firstName,this.age,hobby,favmusic)
    }
}
const user1 = {
    firstName : 'Komal',
    age : 25
}

user.about.call(user,"art", "none")
user.about.call(user1,"guitar","mozrat")


//********************apply****************
const user2 = {
    firstName : 'Pooja',
    age : 94,
    about : function(hobby, favmusic){
        console.log(this.firstName,this.age,hobby,favmusic)
    }
}
const user3 = {
    firstName : 'Asharu',
    age : 65
}

user.about.apply(user2,["art", "none"])
// we can add parameter in array


//********************apply****************
//it return function


const user4 = {
    firstName : 'Asharu1',
    age : 65,
    about : function about(hobby){
        console.log(this.firstName,this.age,hobby)
    }
}
const user5 = {
    firstName : 'Satbir',
    age : 65
}

const func = user4.about.bind(user5,"guitar")
func()
