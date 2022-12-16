// clone using object.assign

const obj = {
    key : "value1",
    key1 : "value2",
}

//we use spread operator instead of this 
//this is the old way

const obj2 = Object.assign({}, obj)
obj.key3 = "value3"
console.log(obj)
console.log(obj2)