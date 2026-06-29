// const tinderUser=new Object() - >singleton object
const tinderUser={} //non singleton object
 
tinderUser.id="123abc"
tinderUser.name="Anu"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"yasmeen",
            lastname:"mohammed"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a" , 2:"b"}
const obj2={3:"c" , 4:"d"}
const obj3={5:"e" , 6:"f"}

// const obj={obj1,obj2,obj3}
// const obj=Object.assign({},obj1,obj2,obj3)

const obj={...obj1,...obj2,...obj3}

// console.log(obj);

const users=[
    {
        id:1,
        email:"y@gmail.com"
    },
    {
        id:2,
        email:"ya@gmail.com"
    },
    {
        id:3,
        email:"yas@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

const {courseInstructor : instructor}=course

// console.log(courseInstructor);
console.log(instructor);


// {
//     "name":"yasmeen",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]
