//function inside function

const app = () => {
    const myFunction = () => {
        console.log('Hello from MY function')
    }
    console.log('Hello from app')
    myFunction()
}
app()