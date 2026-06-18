// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

// console.log(null>0); //false
// console.log(null==0); //false
// console.log(null>=0); //true

//The reason is that equality check == and comparisions > < >= <= work differently
//Comparisions convert null to a number , treating it as 0

console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined>=0); //false

//===
console.log("2"===2); //false






