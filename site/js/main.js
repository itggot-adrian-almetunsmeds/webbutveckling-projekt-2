// Configurable variables
var targetdate = "Feb 20, 2019 00:00:01";
var targetmonth = 1;

// Global JS functions
const calendarBackground = document.querySelector(".calendar_background");
// THIS IS TO TOGGLE THE NAV MENU
let navButton = document.querySelector("header > i");
navButton.addEventListener("click", navigation);
let navBackground = document.querySelector(".nav_background");
navBackground.addEventListener("click", navigation)
let navButton2 = document.querySelector(".nav_menu > i ");
navButton2.addEventListener("click", navigation)
// Function for the nav menu
function navigation() {
    navMenu = document.querySelector(".nav_menu");
    navMenu.classList.toggle("nav_active");
    navBackground = document.querySelector(".nav_background");
    navBackground.classList.toggle("nav_background_active");
    navIcon = document.querySelector(".nav_menu > i");
    navIcon.classList.toggle("nav_icon_active");
}
// Function for the calendar popups
function calendarReveal(input) {
    if (input != "close") {
        let id = "calendar_content_" + input
        document.getElementById(id).classList.toggle("calendar_content_active");
        calendarBackground.classList.toggle("calendar_background_active");
        lastActive = document.getElementById(id);
    }
    if (input === "close") {
        lastActive.classList.toggle("calendar_content_active");
        calendarBackground.classList.toggle("calendar_background_active");
    }
}
// Dropdown menu function
function dropDownMenu() {
    let dropDownMenu = document.querySelector(".deals_dropdown_menu");
    dropDownMenu.classList.toggle("show_menu");
}
// Countdown timer
function Updatetime() {
    let today = new Date().getTime();
    let deltaTime = countDownTarget - today;
    let days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(deltaTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(deltaTime % (1000 * 60 * 60) / (1000 * 60));
    let secounds = Math.floor(deltaTime % (1000 * 60) / (1000));
    document.querySelector(".time_left > p").innerHTML = days + " : " + hours + " : " + minutes + " : " + secounds + " ";

    if (deltaTime < 0 && deltaTime > (-86400000)) {
        christmasDay()
    } else if (deltaTime < (-86400000)) {
        error()
    }
}

// Used in conjunction with the countdown
function error() {
    let placeError = document.querySelector(".countdown")
    placeError.innerHTML = "An error has occurred. Please report this to the administrator."
}

function christmasDay() {
    let placeError = document.querySelector(".countdown")
    placeError.innerHTML = "Det är julafton idag!"
}
// Used to create calendar doors
function doors(day) {
    const adventCalendar = document.querySelector(".calendar")
    var node = document.createElement("li");
    node.id = "door" + day;
    node.className = "door";
    adventCalendar.appendChild(node);

    var innerNode = document.createElement("a");
    document.getElementById("door" + day).appendChild(innerNode);
    innerNode.innerHTML = day

    // If the date has not passed then add the disabled class to it.
    let currentDate = new Date();
    if ((currentDate.getMonth() + 1) < targetmonth || currentDate.getDate() < day) {
        node.className += " disabled"
    } else {
        node.setAttribute('onclick', `calendarReveal(${day})`);
    }
}

// JS functions to load on the jul_facta / facts page
if (window.location.href.includes("facts.html") === true) {
    // Current position highlighted in nav
    let navActive = document.getElementById("jul_fakta");
    navActive.classList.toggle("nav_current");
}
// JS functions to load on the dagens_deals page
if (window.location.href.includes("deals") === true) {
    // Current position highlighted in nav
    let navActive = document.getElementById("dagens_deals");
    navActive.classList.toggle("nav_current");
}
// JS functions to load on the hjul facts page
if (window.location.href.includes("hjul.html") === true) {
    // Current position highlighted in nav
    let navActive = document.getElementById("hjul_fakta");
    navActive.classList.toggle("nav_current");
}
// JS functions to load on the index page
if (window.location.href.includes("index.html") === true) {
    // Current position highlighted in nav
    let navActive = document.getElementById("hem");
    navActive.classList.toggle("nav_current");
    // THIS IS FOR THE COUNTDOWN TIMER
    Updatetime();
    // Call the function when loaded to avoid the 1000ms initial gap then every second call Updatetime
    var countDownTarget = new Date(targetdate).getTime();
    setInterval(Updatetime, 1000);

    // This is for the calendar
    // It has NO autoupdate at the moment. TODO: Add auto update of doors and not 
    // only on page load
    // Create 24 li items/doors
    for (i = 1; i <= 24; i++) {
        doors(i)
    }
}




// console.log("test")