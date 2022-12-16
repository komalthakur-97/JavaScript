//for loop

for(let x = 0; x <= 10; x++){
    console.log(x) //local 
}

let i = 0
for(let i = 0; i <= 10; i++){
    console.log(i) 
}
console.log(i) //global

for(let a	= 1; a <= 10; a++){
	if(a === 6){
		break
	}
	console.log(a)
}