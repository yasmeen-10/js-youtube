//singleton - constructors se banega

//object literals

// object.create -> constructor ke through , isi ke andar singleton banta hai

const mySym=Symbol("key1")

const JsUser={
    name:"Yasmeen",
    "full name":"Mohammed Yasmeen",
    [mySym]:"mykey1",
    age:20,
    Location:"Hyderabad",
    email:"yasmeen@gmail.com",
    isLoggedIn:false,
    lastLoginDaya:["monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email'])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);
// console.log(typeof mySym);

JsUser.email="yasmeen12@gmail.com"
// Object.freeze(JsUser)
JsUser.email="yasmeen00@gmail.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS User");  
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS User , ${this.name}`);  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// The reason of undefined is because the greeting function is not returning anything it is just priniting thats why the return type is undefined