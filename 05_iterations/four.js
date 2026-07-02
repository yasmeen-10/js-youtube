const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const numbers=[1,2,3,4,5]
for (const num in numbers) {
//    console.log(numbers[num]); 
}

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map) {
    // console.log(key);
}



//object ke upar loop lagana hai toh for in loop
//array - for of loop
