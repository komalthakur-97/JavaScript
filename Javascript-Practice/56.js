// ***************** imp *****************

//-> in DOM you can also  write directly "this", "window" and "this==window"

console.log(this)

//------> in terminal it will return empty object

// ------> in DOM --> Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

// console.log(window)
// ------> in DOM it will also return the same --> Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
//--> in terminal it will throw an error "that window is not defined"
// console.log(this==window)
//it will return "true" in DOM

// function myFun(){
//     console.log(this) 
// }
// window.myFun()
//here "this" will execute upper function from it that is windows


//-->it will run only in DOM --> Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

"use strict" //it's to indicate that the code should be executed in "strict mode". 
//You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

function myFun(){
    // "use strict"
    console.log(this)
}
myFun()