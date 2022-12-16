// nested if else

let myFirstno = 18
let myLastno = 14
let myOtherno = 14

if(myFirstno <= myLastno){
    console.log("myFirstno is less then myLastno")
}else{
    if(myLastno === myOtherno){
        console.log("myLastno is not equal to myOtherno")
    }else{
        console.log("check the number")
    }
}

// with ternary operator
let result = myFirstno <= myLastno ? "myFirstno is less then myLastno1" : "myLastno is less then myFirstno1"

console.log(result)