/* Q1) Write the program to greet a person given their first and last name

let name = "Chinmay"
let lastName = "Nawkar"
console.log(name + " " +  lastName) 

// Q2) Write a program that greets a person based on their gender. (If else)

let personName = prompt("Enter your name:");
let gender = prompt("Enter your gender :");

if (gender === "male") {
    console.log("Hello, Mr. " + personName);
} else if (gender === "female") {
    console.log("Hello, Ms. " + personName);
} else {
    console.log("Hello, " + personName);
} 

3. Write a program that counts from 0 - 1000 and prints (for loop)

let count = 0;
for(let i = 0 ; i < 1000 ; i++) {
    count++
    console.log("The number is : " + i  +  " " + "and count  is " + count)
    
} 

//Array & Objects Practice Problems
// 1. Write a program prints all the even numbers in an array

let noArr = [2,3,45,6,78,8]
let num = noArr.length;
for(let i = 0; i < num; i++) {
    if(noArr[i] % 2 == 0) {
        console.log(noArr[i])

    }
} 

//2. Write a program to print the biggest number in an array

let arr = [2,34,54,6,4,7,68,6,85,8]
let num = arr.length
let max = arr[0]
for(let i = 0; i < num; i++) {
    if(arr[i] > max) {
        max = arr[i]
    }
}
console.log(max)


//3. Write a program that prints all the male people’s first name given a complex object

const personsName = [
    {firstName: "Chinmay" , lastName: "Nawkar", gender:"male"},
    {firstName:"Shreya", lastName:"Arrora", gender:"female"},
    {firstName: "Suraj" , lastName: "Rr", gender:"male"},
    {firstName: "Chinmayi" , lastName: "N", gender:"female"},
]
/*const males = personsName.filter(person => person.gender === "male")
males.forEach(person => {
    console.log(person.firstName)
})
    
    //2nd way
function checkMale(peopleData) {
    for(let i = 0; i < peopleData.length; i++ ) {
        if(peopleData[i].gender === "male") {
            console.log(peopleData[i].firstName)
        }
    }
}
 checkMale(personsName)


// 4. Write a program that reverses all the elements of an array

let arr = [1,2,3,4,5]

console.log(arr.reverse())
*/

const prompt = require('prompt-sync')();
let yourName = prompt("Enter you first name")
console.log(yourName)
