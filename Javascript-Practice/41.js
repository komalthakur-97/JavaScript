// function returning functions

function myFun(){
    function myhello(){
        return "Hello Komal"
    }
    return myhello;
}

const ans = myFun()
console.log(ans())