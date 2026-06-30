const user={
    username:"yasmeen",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="yashu"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username="yasmeen"
//     console.log(this.username); //undefined
// }
// chai()

// const chai=function(){
//     let username="yasmeen"
//     console.log(this.username); //undefined
// }


//chai()


const chai=()=>{
    let username="yasmeen"
    console.log(this.username); //undefined
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(4,4));

// const addTwo=(num1,num2)=> num1+num2

// const addTwo=(num1,num2)=> (num1+num2)

const addTwo=(num1,num2)=> ({username:"yasmeen"})

console.log(addTwo(9,9))

// const myArray=[2,5,4,6,8]
// myArray.forEach(())