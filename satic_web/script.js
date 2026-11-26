// variable
// keyword: let , var , const 

// naming a variable 

let account_number_info ;
let accountNumberInfo;


const firstname = "OBI" ;

// firstname =  "peteris 12 years old";

// let age;

// console.log("nanfwang");-
console.log(firstname);
// console.log(age);

// datatypes
// string , number , boolean, null , undefined , array , object

let color = "red";
let number =  3;
let registered = false;
let dataNull = null;

console.log(dataNull);

// array

let fruits = ["orange" , "mango" , "apple"];

console.log(fruits[0]);

// objects

let userInfo = {
name: "Obi" ,
age: "22",
staff: false,
registered: true,

}

console.log(userInfo.name);
console.log(userInfo.age);

console.log(typeof(registered));

// contatenation

let firstName = "prince";
let lastName = "george";
let age = 10;

let statement =  firstName + lastName + " is " + age +"years old";

let statementCaps=statement.toUpperCase();

console.log(firstName +" " + lastName + " is " + age +"years old");

// template string/literal
console.log(`my name is ${firstName} ${lastName} ${age}`);

// stringMethods
console.log(firstName);

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(lastName.trim());

console.log(statementCaps);

console.log(firstName[2]);
console.log(firstName.endsWith("es"));


// let firstNameCaps = firstName.toUpperCase();
// console.log(firstNameCaps.startsWith());
// console.log(firstName.includes("@"));

// console.log(firstName.search(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`));

// 

console.log(firstName.slice(0,3));

console.log(firstName[0].toUpperCase() + firstName.slice(1,100));

// console.log(firstName.slice(-2));

console.log(firstName.concat(" hi"));

let greeting =  "Good Morning" ;

console.log(firstName.replace(firstName[0],firstName[0].toUpperCase()));


console.log(greeting.padEnd(20 , "#uiyu"));

let frui_ts = "apple, orange,  mango";

console.log(frui_ts.split(","));


// conditionals {if statement; else , else-if , switch statement}


// if(condition to met){
// // code to run

// }else{
// code to run for else

    // }


let userAge = 18;
let userGender = "male";


  if(userAge == 18 ){
console.log("eligible to vote");

if (userGender.trim() == "male"){
 console.log("Also a male");

 
}else{
 console.log("Also a female");

}



  } else{
  console.log("Not eligible to vote");
  
  }

  console.log("break------------------");


  
  
  // or ||  --------- and &&

  
  
  // if( ){
    
  //   console.log("satisfied condition");
    
  // }
  
  // EVEN or ODD

  let num = 12;
  
  let userName = "john  ";

  let user_Age = 30 ;


  let score = 64;

  if(score >= 70 && score <= 100 ){

       console.log("A");
 
  }else if (score <=69 && score >=50){

       console.log("B");
    
  }

  // TEST

//   if(typeof(user_Age) === "number" ){

//      console.log(user_Age + 10);
     

//   }else{
//     console.log("userage is a string");
    
//   }
// let nothing;

//   console.log(typeof(user_Age));

2

console.log(2**3);

// switch
let option="hi";

// switch(option){
// case "GREEN" :document.body.innerHTML= "<ul><li>one</li><li>two</li><ul>";
//  break ; 
// case "RED" :document.body.style.backgroundColor= "red";
//  break ; 
// case 3 :console.log("He chose 3");
//  break ; 
// case 4 :console.log("He chose 4");
// break; 
// default: console.log("default");
// break;
// }





// TENARY OPERATOR

option == 1 || option == "hi"? console.log("1"): console.log("not 1");

if(option==1){
console.log("1")
}else {
  console.log("not 1")
}

// MATH OBJECT

let num1= 2.2222 ,  num2=4 ;

console.log(Math.pow(num1,num2));
console.log(Math.sqrt(49));

console.log(Math.round(num1));
console.log(Math.ceil(num1));

console.log(Math.random()*9);

console.log(Math.floor(Math.random()*6));

let cars = ["lambo", "benz","tesla","g-wagon", "cars", "ford"];

console.log(cars[Math.floor(Math.random()*cars.length)]);

// loops
// for loop , while loop , do while loop

// for(initialization; condition ; increment){
 
//    code block

// }


let i= "ne";

for(let i=1 ; i<=10 ; i++){

  console.log(i);

}

// console.log(i);


let sum = 6;
let add = 1;

 sum -= add ;

//  sum = sum - add ;

// console.log(++sum);

// console.log(add++);

// console.log(add);


console.log(sum);

let fruit_s = [{id: 1 , name:"john" , registered:false},"apple", "guava" , "banana" , "orange", "pineapple", {name:"strawberry"}];


for (let i=0 ; i< fruit_s.length; i++) {
  
if(typeof(fruit_s[i])==="object"){

if(fruit_s[i].registered ===false){
console.log("");

}else{

  console.log(`my name is ${fruit_s[i].name}`);

}


}else{

  console.log(fruit_s[i]);
  
}

}



console.log(typeof(fruit_s[0]));


let addition ="10/2"


sum = 0;


for(let i =1 ; i <=10 ; i++ ){
 
  sum+= i ;
  
  
}

console.log(sum);

// console.log("test");

console.log(eval(addition));


let iterate = 1;

while(iterate <=10){

console.log("hi");

iterate++;

}


// do while

// do {
//   console.log("hi");

// iterate++;
// } while (iterate >=10);


//functions
// function functionName(parameters){
// // code
// }


function helloWorld(){

 console.log("hello word");

}

helloWorld();
helloWorld();
helloWorld();
helloWorld();

let numb1 , numb2;

function addTwoNumbers(num1 , num2){

  console.log(num1 + num2);

}


addTwoNumbers(3,3);

addTwoNumbers(4,8)

function subtractTwoNumbers(n1 , n2 ) {
  console.log(n1 - n2);
  return `hi`;
   
}


subtractTwoNumbers(4,6);
subtractTwoNumbers(9,4);


// console.error("error bad network")

function greetings(name) {

  // console.log(`Good morning`);


  return `Good morning ${name}`;

}


// let greet = greetings("Nanfwang");

// console.log(greet);

//   let y= "ten";

// if (greetings("obi")==="Good morning obi!") {

//   console.log("yes");
// return `hi`;
// }

// let sub = subtractTwoNumbers(3 ,5);

// console.log(sub);

// console.log(y);

console.log(greetings("john"));


function pow(base , exponent){
  
return base**exponent;
}



console.log(pow(2,6));

function quadraticformula(a, b , c){

let answerP, divideP , finalP;
answerP = -b + Math.sqrt(b**2 - 4*a*c) ;
divideP = 2*a;

finalP = answerP/divideP;

let answerN, divideN , finalN;
answerN = -b - Math.sqrt(b**2 - 4*a*c) ;
divideN = 2*a;

finalN = answerN/divideN;


return `ANSWER is ${finalP} or ${finalN}` ;

}

function one(){
  return 1
}

console.log(quadraticformula(one(),-4,4));

// document.body.innerHTML = quadraticformula(1,-4,4);


// console.log(j);

//function expresions 
const salute = function(){
 return `salute`
}


console.log(salute());


// arrow function






// setInterval(()=>{
  
// }, interval);

function blink(){


let colors = ["red" , "yellow", "green", "blue"];


// document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]

}



setInterval(blink,10)

// setTimeout(() => {

//   console.log("settimeout");
  
// }, 5000);


// immediately invokable function expressions (IIFE)

// (function g(){

// console.log("helooooooooooooo");
  
// })();

// date object

let date =  new Date();

//getdate

console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log(date.getDay()+1);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());



// SIMPLE TASK

let currentDate , currentMonth , currentYear ;

currentDate = date.getDate() , currentMonth =date.getMonth() , currentYear=date.getFullYear()  ;


 switch(currentMonth){
case 0: currentMonth="JAN";
 break;
case 1: currentMonth="FEB";
 break;
case 2: currentMonth="MAR"; 
break;
case 3: currentMonth="APRIL"; 
break;
case 4:currentMonth= "MAY";
 break;
case 5:currentMonth= "JUNE";
 break;
case 6: currentMonth="JULY";
 break;
case 7:currentMonth= "AUG"; 
break;
case 8:currentMonth= "SEP";
 break;
case 9:currentMonth= "OCT";
 break;
case 10: currentMonth="NOV";
 break;
default: currentMonth="DEC";
 break;
 }


let fullDate = `${currentDate}th of ${currentMonth} , ${currentYear}`;

let displayDate = document.querySelector(".footer");

displayDate.textContent=`@copyright ${fullDate}`;



// switcth

let optio_n = 4 ;

switch(optio_n){
case 4: console.log("hi");
 ; break;
 case "let": console.log("let");
 ; break;
default: console.log("deafault");
;break;

}


// ARRAYS

// let array =  ["john" , true , false , "false" ,  "true" , 1 , 2 , "1"];
let phones = ["iphone" , "samsung" , "vivo" , "tecno" ];

let navItems = ["Home" , "FAQ" , "Services" ];





// console.log(phones[0]);
// array method

// push , pop , foreach....

// console.log(phones.pop());
// console.log(phones.shift());
// console.log(phones.push({name:"obi" , height:"34cm"}));
// console.log(phones.unshift("infinix"));

// foreach
phones.forEach((item,index)=>{

console.log(index + 1 + " " + item.toLocaleUpperCase());
console.log("djhfd");

});


let hamburger = document.querySelector(".hamburger")
let mobileNav = document.querySelector(".mobileNav")

hamburger.addEventListener("click", () =>{
  mobileNav.classList.toggle("left");
})


let mainPic = document.querySelector(".mainPic")
let otherPics = document.querySelector(".otherPics")

otherPics.addEventListener("click", (event)=>{
  console.log(event.target.src);
  mainPic.setAttribute("src", event.target.src);
})


// filter

let searchFilter = phones.filter((item)=>{

if(item.includes("e")){
return item
}

});

let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let list = document.querySelectorAll("li")
let navBar = document.querySelector(".navBar")
let footer = document.querySelector(".footer")

light.addEventListener("click", (event)=>{
  light.style.display = "none"
  dark.style.display = "block"
  document.body.style.backgroundColor = "white"
  list.forEach((li) => {
    li.style.color = "black"
  });
  navBar.style.borderBottom = "1px solid black"
  footer.style.borderTop = "1px solid black"
  footer.style.color = "black"
});

dark.addEventListener("click", (event)=>{
  dark.style.display = "none"
  light.style.display = "block"
  document.body.style.backgroundColor = "black"
  list.forEach((li) => {
    li.style.color = "white"
  });
  navBar.style.borderBottom = "1px solid white"
  footer.style.borderTop = "1px solid white"
  footer.style.color = "white"
});

console.log(searchFilter);


searchFilter.forEach((filter)=>{
  console.log(filter);
  
});





console.log(phones);

 



let info = {
  firstNme : "Kingsley",
  age : 40,
  greeting(){
    console.log(`Hello ${this.firstNme}`);    
  }
}

console.log(info.firstNme);
(info.greeting());

// alert("Kingsley");

















// arrays











  













  



  

  
  



  








































