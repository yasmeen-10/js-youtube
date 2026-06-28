const name="yasmeen"
const repoCount=50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('yasmeen-ym-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString=gameName.substring(0,4)
console.log(newString);


const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="   yasmeen     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://yasmeen.com/yasmeen%20ym"
console.log(url.replace('%20', '-'))

console.log(url.includes('yasmeen'));
console.log(url.includes('apple'));

console.log(gameName.split('-'));
