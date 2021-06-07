// console.log("Hello World");

// let total = 1+5;

// console.log("Good Bye!!!");

// if (1 + 1 === 2){
//     console.log("It's Correct")
// }

// let random = Math.random();
// if(random < 0.5){
//     console.log("Your number is less than 0.5!!!")
//     console.log(random)
// }

// if(random > 0.5){
//     console.log("Your number is greater than 0.5!!!")
//     console.log(random)
// }

// // const dayOfWeek = 'friday';

// // if  (dayOfWeek === 'monday'){
// //     console.log("UHH I Hate Monday!!!")
// // } else if (dayOfWeek === 'saturday'){
// //     console.log("YAY I Love Saturday!!!")
// // }else if (dayOfWeek === 'friday'){
// //     console.log("Let's Party!!!")
// // }

// // 0 - 5  free 
// // 5-10  child $10 
// // 10-65 adult $20
// // 65+ senior $10

// const age = 10 ;

// if (age < 5) {
//     console.log("You Are Baby, You get in For Free!!!")
// } else if (age <= 10){
//     console.log("You Are Child, You Have To Pay $10")
// }  else if (age < 65){
//     console.log("You Are Adult, You Have To Pay $20")
// } else if (age >= 65){ 
//     console.log("You Are Senior, You Have To Pay $10")
// }

// const dayOfWeek = prompt('Enter a Day').toLowerCase();

// if  (dayOfWeek === 'monday'){
//     console.log("UHH I Hate Monday!!!")
// } else if (dayOfWeek === 'saturday'){
//     console.log("YAY I Love Saturday!!!")
// }else if (dayOfWeek === 'friday'){
//     console.log("Let's Party!!!")
// }else {
//     console.log("MEH!!!")
// }

// const password = prompt('Input Your Password')

// //password must be 6+ characters
// if (password.length >= 6){
//     //password cannot include spaces
//     if(password.indexOf(' ') === -1){
//         console.log("Valid Password!!!")
//     }else{
//         console.log("Password Cannot Contain Spaces!!!")
//     }
// }else{
//     console.log('Password Too Short, Must be 6+ Characters')
// }

// const userInput = prompt("Input Something");

// if(userInput){
//     console.log("Truthy!")
// } else{
//     console.log("Falsy!")
// }

// if(0){
//     console.log("Truthy!")
// } else{
//     console.log("Falsy!")
// }

// if(NaN){
//     console.log("Truthy!")
// } else{
//     console.log("Falsy!")
// }

// if(undefined){
//     console.log("Truthy!")
// } else{
//     console.log("Falsy!")
// }

// if('  '){
//     console.log("Truthy!")
// } else{
//     console.log("Falsy!")
// }

// const password = prompt("Input Password");

// if(password.length >= 6 && password.indexOf(' ') === -1){
//     console.log("Valid Password!!!")
// } else{
//     console.log("Incorrect Format")
// }

// // 0 - 5  free 
// // 5-10  child $10 
// // 10-65 adult $20
// // 65+ senior $10

// const age = 10;

// if (age >= 0 && age < 5 || age >= 65){
//     console.log("Free!!!")
// } else if ( age >= 5 && age <10){
//     console.log("$10!!!")
// } else if (age >=10 && age < 65){
// console.log("$20!!!")
// } else{
//     console.log("Invalid Age")
// }

let firstName = prompt("Enter your First Name");

if(!firstName){
    firstName = prompt("Try Again!!!");
}