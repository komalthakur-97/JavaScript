// functions

function practice(){
    console.log("Hello, How are you!")
}
practice()

function addition(){
    console.log(2+9)
}
addition()

function practiceAdd(){
    return 5+8;
}
console.log(practiceAdd())


function findTargets(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i]=== target){
            return i
        }
    }
    return -1 //it'll return this value if it'll not able to find the given value
}
const myArray = [1,2,3,4,5]
const result = findTargets(myArray,6)
console.log(result)
