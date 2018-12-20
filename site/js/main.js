// Global JS functions
// THIS IS TO TOGGLE THE NAV MENU
let navButton = document.querySelector("header > i");
navButton.addEventListener("click", navigation);
let navBackground = document.querySelector(".nav_background");
navBackground.addEventListener("click", navigation)
let navButton2 = document.querySelector(".nav_menu > i ");
navButton2.addEventListener("click", navigation)

function navigation(input) {
    navMenu = document.querySelector(".nav_menu");
    navMenu.classList.toggle("nav_active");
    navBackground = document.querySelector(".nav_background");
    navBackground.classList.toggle("nav_background_active");
    navIcon = document.querySelector(".nav_menu > i");
    navIcon.classList.toggle("nav_icon_active");
    if (navIcon.innerHTML == "close") {
        navIcon.innerHTML = "menu";
        console.log(navIcon.innerHTML);
    } else {
        navIcon.innerHTML = "close";
        console.log(navIcon.innerHTML);
    }
}

// JS functions to load on the jul_facta / facts page
if (window.location.href.includes("facts.html") === true) {
    // Current position highlighted in nav
    let navActive = document.getElementById("jul_fakta");
    navActive.classList.toggle("nav_current");
}

// JS functions to load on the index page
if (window.location.href.includes("index.html") === true) {
    // Current position highlighted in nav
    let navActive = document.getElementById("hem");
    navActive.classList.toggle("nav_current");

    // THIS IS FOR THE COUNTDOWN TIMER
    Updatetime();
    // Call the function when loaded to avoid the 1000ms initial gap
    var countDownTarget = new Date("Dec 24, 2018 00:00:01").getTime();
    var updateInterval = setInterval(Updatetime, 1000);

    function Updatetime(input) {
        let today = new Date().getTime();
        let deltaTime = countDownTarget - today;
        let days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor(deltaTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(deltaTime % (1000 * 60 * 60) / (1000 * 60));
        let secounds = Math.floor(deltaTime % (1000 * 60) / (1000));
        document.querySelector(".time_left > p").innerHTML = days + " dagar " + hours + " timmar " + minutes + " minuter " + secounds + " sekunder";

        console.log(Updatetime)
        if (deltaTime < 0 && deltaTime > (-86400000)) {
            christmasDay()
        } else if (deltaTime < (-86400000)) {
            error()
        }
    };

    function error(input) {
        let placeError = document.querySelector(".countdown")
        placeError.innerHTML = "An error has occured. Please report this to the administrator."
    }

    function christmasDay(input) {
        let placeError = document.querySelector(".countdown")
        placeError.innerHTML = "Det är julafton idag!"
    }

    // This is for the calendar
    // It has NO autoupdate at the moment. TODO: Add auto update of doors and not 
    // only on page load
    // Create 24 li items
    for (i = 1; i <= 24; i++) {
        doors(i)
    }

    function doors(day) {
        const adventCalendar = document.querySelector(".calendar")
        var node = document.createElement("li");
        node.id = "door" + day;
        node.className = "door";
        // node.onClick = calendarReveal(day);
        adventCalendar.appendChild(node);

        var innerNode = document.createElement("a");
        document.getElementById("door" + day).appendChild(innerNode);
        innerNode.innerHTML = day

        // If the date has not passed then add the disabled class to it.
        let currentDate = new Date();
        if ((currentDate.getMonth() + 1) < 12 || currentDate.getDate() < day) {
            node.className += " disabled"
        } else {
            node.setAttribute('onclick', `calendarReveal(${day})`);
        }
        // Add eventclicker to all of the boxes in the calendar.

    }

    function calendarReveal(input) {
        const calendarContent = document.getElementById(`door${input}`);
        calendarContent.classList.toggle("calendar_content_active");
        if (input === 1){
        
        } else if (input === 2){
            
        }
    }

};

// console.log(document.querySelector("header > i"))