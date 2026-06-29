function sayMyName(){
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
}

const result=addTwoNumbers(3,4)
// console.log("Result: ",result);


// input passed in function definition are parameters

// values passed in function call are arguments


function loginUserMessage(username = "apple"){
    // if(username===undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("yasmeen"));
// console.log(loginUserMessage("yashu"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,800));

const user={
    username:"yasmeen",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"bin",
    price:300
})

const myNewArray=[200,400,800,900]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,700,900]));
