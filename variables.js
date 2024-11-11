// naming a variable
// let name = "Azola"   -can be modified 
// const name = "Azola" -declare a variable that cant be overwritten 
// var name = "Azola"   -globally scoped 
// print
// console.log(name);

// console.log(`Hi ${fullName}`);

// Booleans
// let name = null
// console.log(name);
// let name = true
// let num = 5
// console.log(`My name is ${name}`);
// console.log("My name is " + name +num);

// array
// let myArray = ['anything' ,2, true, 'string']
//  console.log(myArray[0]); //indexing

// camelcase -> myArray(always used in JS)
// Pascalcase ->MyArray
// kebabcase -> my-array(only use in vue)

// object literal -declare (make) an object
let table = {
    material:"wood",
    no_of_legs: 4,
    occupied: true

}
// bracket notation
// console.log(table["material"]);
// console.log(table["material"]);

// dot notation
// console.log(table.material);

// destructuring 
// let {material} = table// wood
// console.log(material);
// let {material,occupy} = table
// console.log(material);

// functions 
// () - parentheses
// [] - brackets
// {} - braces
function greeting(a,b){
    // a&b are parameters
    console.log('This is a greeting' + (a+b));
}
// 3&4 are arguements
// greeting(3,4)

// let num1 = 5
// num1 ++ post increment
// ++num1 pre increment
// --num1 pre decrement
// num1-- post decrement
// console.log(num1++);
// console.log(num1);


let myString = "Something"

// shows us the length of the string (e.g password character length, you can also set it to a variable)
// console.log(myString.length);

// Make text to small letters
// console.log(myString.toLowerCase());

// make text to Capital Letters
// console.log(myString.toUpperCase());

// 
let split = myString.toLowerCase().split('')
console.log(split);











