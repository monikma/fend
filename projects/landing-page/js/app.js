/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const elNavbar = document.querySelector("#navbar__list");
const navActiveClass = "nav-active";

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function buildNav() {
    // find all sections
    const sections = document.querySelectorAll("section");
    const navFragment = document.createDocumentFragment();
    sections.forEach(function(section){
        // create li for each section
        const li = document.createElement("li");
        const sectionTitle = section.querySelector("h2").textContent;
        li.textContent = sectionTitle;
        navFragment.appendChild(li);
    });
    // append the fragment containing all section titles
    elNavbar.appendChild(navFragment);
}

function setupActiveDetection(){
}

function setupScrolling(){
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

new function(){
    // build the nav
    buildNav();

    // Add class 'active' to section when near top of viewport
    setupActiveDetection();

    // Scroll to anchor ID using scrollTO event
    setupScrolling();
}();


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


