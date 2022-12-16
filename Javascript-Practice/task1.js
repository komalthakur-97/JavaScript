// check weather no is prime or not (function)

const num1 = [1,2,3,4,5]
let count = 0
for(i=2; i<=num1[i]; i++) {
    if(num1[i] % i !== 0 ){
        count++
        if(count == 1 ){
            console.log(num1[i],"prime")
        }
    }else{
        console.log(num1[i],"not prime")
    }
}

const num = [1,2,3,4,5]

const primeNumber = ((num)=>{
    return num[i]% i !== 0
})

const primeNo = num.filter(primeNumber)

console.log(primeNo)