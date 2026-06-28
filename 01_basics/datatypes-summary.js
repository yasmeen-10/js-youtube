//Primitive - call by value

//7 Types :String ,Number , Boolean , null , undefined , Symbol , BigInt


//

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber=566666666666666666666666666668888888888n
// console.log(bigNumber);


//Reference (Non Premitive)

//Array , Objects , Functions

const heros=["shaktiman" , "naagraj" , "doga"]

let myObj={
    name:"yasmeen",
    age:22
}

const myFunction=function(){
    console.log("Hwllo world");
}

console.log(typeof bigNumber); //bigint
console.log(typeof outsideTemp); //object
console.log(typeof scoreValue); //number
console.log(typeof myFunction); //function
console.log(typeof anotherId); //symbol


// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object






//Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename="yasmeen.com"

let anothername=myYoutubename
anothername="yas.com"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="yasmeen@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


// There are 2 types of datatype
// 1. Primitive datatype:-
//     1.String
//     2. Number
//     3. Boolean (true / false)
//     4. null (iska matlab hai empty or zero nahi hai)
//     5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
//     6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
//     7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

// 2. Preference datatype (Non Primitive datatype)
//     1. Array ( [ ] )
//     2. Object ( { } )
//     3. Function ( function( ){ } )


// Primitive Types:
// 1. Stored in stack.
// 2. Passed or assigned by value (call by value).
// 3. Changes to copies don't affect the original.

// Reference Types:
// 1. Stored in heap; accessed via references (stored in stack).
// 2. Changing the value through another reference affects the original.

//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

