// Global JS functions
const calendarBackground = document.querySelector(".calendar_background");
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
    } else {
        navIcon.innerHTML = "close";
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
    var countDownTarget = new Date("Feb 20, 2019 00:00:01").getTime();
    var updateInterval = setInterval(Updatetime, 1000);

    function Updatetime(input) {
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
    };

    function error(input) {
        let placeError = document.querySelector(".countdown")
        placeError.innerHTML = "An error has occurred. Please report this to the administrator."
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
        if ((currentDate.getMonth() + 1) < 1 || currentDate.getDate() < day) {
            node.className += " disabled"
        } else {
            node.setAttribute('onclick', `calendarReveal(${day})`);
        }
    }

    function calendarReveal(input) {
        if (input === 1) {
            document.getElementById("calendar_content_1").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_1");
        } else if (input === 2) {
            document.getElementById("calendar_content_2").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_2");
        } else if (input === 3) {
            document.getElementById("calendar_content_3").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_3");
        } else if (input === 4) {
            document.getElementById("calendar_content_4").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_4");
        } else if (input === 5) {
            document.getElementById("calendar_content_5").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_5");
        } else if (input === 6) {
            document.getElementById("calendar_content_6").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_6");
        } else if (input === 7) {
            document.getElementById("calendar_content_7").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_7");
        } else if (input === 8) {
            document.getElementById("calendar_content_8").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_8");
        } else if (input === 9) {
            document.getElementById("calendar_content_9").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_9");
        } else if (input === 10) {
            document.getElementById("calendar_content_10").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_10");
        } else if (input === 11) {
            document.getElementById("calendar_content_11").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_11");
        } else if (input === 12) {
            document.getElementById("calendar_content_12").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_12");
        } else if (input === 13) {
            document.getElementById("calendar_content_13").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_13");
        } else if (input === 14) {
            document.getElementById("calendar_content_14").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_14");
        } else if (input === 15) {
            document.getElementById("calendar_content_15").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_15");
        } else if (input === 16) {
            document.getElementById("calendar_content_16").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_16");
        } else if (input === 17) {
            document.getElementById("calendar_content_17").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_17");
        } else if (input === 18) {
            document.getElementById("calendar_content_18").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_18");
        } else if (input === 19) {
            document.getElementById("calendar_content_19").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_19");
        } else if (input === 20) {
            document.getElementById("calendar_content_20").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_20");
        } else if (input === 21) {
            document.getElementById("calendar_content_21").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_21");
        } else if (input === 22) {
            document.getElementById("calendar_content_22").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_22");
        } else if (input === 23) {
            document.getElementById("calendar_content_23").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_23");
        } else if (input === 24) {
            document.getElementById("calendar_content_24").classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
            lastActive = document.getElementById("calendar_content_24");
        } else if (input === "close") {
            document.getElementById("calendar_content_24");
            lastActive.classList.toggle("calendar_content_active");
            calendarBackground.classList.toggle("calendar_background_active");
        }
    }
};

// console.log(document.querySelector("header > i"))