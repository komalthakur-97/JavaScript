//falsy values (false, "", null, undefined, 0)

let firstName = ""
if(firstName){
    console.log(firstName)
}else{
    console.log("firstName is empty")
}

let ans = firstName ? firstName : "First Name is Empty"
console.log(ans)