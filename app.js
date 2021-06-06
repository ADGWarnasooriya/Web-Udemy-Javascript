console.log("Hello World");

let total = 1+5;

console.log("Good Bye!!!");

if (1 + 1 === 2){
    console.log("It's Correct")
}

let random = Math.random();
if(random < 0.5){
    console.log("Your number is less than 0.5!!!")
    console.log(random)
}

if(random > 0.5){
    console.log("Your number is greater than 0.5!!!")
    console.log(random)
}

// const dayOfWeek = 'friday';

// if  (dayOfWeek === 'monday'){
//     console.log("UHH I Hate Monday!!!")
// } else if (dayOfWeek === 'saturday'){
//     console.log("YAY I Love Saturday!!!")
// }else if (dayOfWeek === 'friday'){
//     console.log("Let's Party!!!")
// }

// 0 - 5  free 
// 5-10  child $10 
// 10-65 adult $20
// 65+ senior $10

const age = 10 ;

if (age < 5) {
    console.log("You Are Baby, You get in For Free!!!")
} else if (age <= 10){
    console.log("You Are Child, You Have To Pay $10")
}  else if (age < 65){
    console.log("You Are Adult, You Have To Pay $20")
} else if (age >= 65){ 
    console.log("You Are Senior, You Have To Pay $10")
}

const dayOfWeek = prompt('Enter a Day').toLowerCase();

if  (dayOfWeek === 'monday'){
    console.log("UHH I Hate Monday!!!")
} else if (dayOfWeek === 'saturday'){
    console.log("YAY I Love Saturday!!!")
}else if (dayOfWeek === 'friday'){
    console.log("Let's Party!!!")
}else {
    console.log("MEH!!!")
}