let date = new Date();

//getdate

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay() + 1);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());



// SIMPLE TASK

let currentDate, currentMonth, currentYear;

currentDate = date.getDate(), currentMonth = date.getMonth(), currentYear = date.getFullYear();


switch (currentMonth) {
    case 0: currentMonth = "JAN";
        break;
    case 1: currentMonth = "FEB";
        break;
    case 2: currentMonth = "MAR";
        break;
    case 3: currentMonth = "APRIL";
        break;
    case 4: currentMonth = "MAY";
        break;
    case 5: currentMonth = "JUNE";
        break;
    case 6: currentMonth = "JULY";
        break;
    case 7: currentMonth = "AUG";
        break;
    case 8: currentMonth = "SEP";
        break;
    case 9: currentMonth = "OCT";
        break;
    case 10: currentMonth = "NOV";
        break;
    default: currentMonth = "DEC";
        break;
}


let fullDate = `${currentDate}th of ${currentMonth} , ${currentYear}`;

let displayDate = document.querySelector(".footer");

displayDate.textContent = `@copyright ${fullDate}`;


let hamburger = document.querySelector(".hamburger")
let mobileNav = document.querySelector(".mobileNav")

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("left");
})

let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let list = document.querySelectorAll("li")
let navBar = document.querySelector(".navBar")
let footer = document.querySelector(".footer")

light.addEventListener("click", (event) => {
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

dark.addEventListener("click", (event) => {
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

let displayCal = document.querySelector(".displayCal");
let buttons = document.querySelector(".buttons");
let calculate = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let btn = document.querySelectorAll(".btn");



btn.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log(event.target.dataset.value);
        displayCal.value += event.target.dataset.value;

    });
});

calculate.addEventListener("click", (event) => {
    displayCal.value = eval(displayCal.value);
});

clear.addEventListener("click", (event) => {
    displayCal.value = "";
});


// buttons.addEventListener("click", (event) => {

//     let value = event.target.dataset.value;
//     let action = event.target.dataset.action;

//     if (action === "clear") {
//         expression = "";
//         display.textContent = "0";
//     }

//     else if (action === "calculate") {
//         display.textContent = eval(expression);
//     }

//     else if (value !== undefined) {
//         expression += value;
//         display.textContent = expression;
//     }

// });