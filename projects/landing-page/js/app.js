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
let allSections = []; // to be filled later

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
        li.setAttribute("data-nav", section.getAttribute("data-nav"));
        li.textContent = sectionTitle;
        navFragment.appendChild(li);
        allSections.push(li);
    });
    // append the fragment containing all section titles
    elNavbar.appendChild(navFragment);
}

function setupActiveDetection(){
    document.addEventListener("scroll", function(event){//TODO use constant?
        const sections = document.querySelectorAll("section");
        let currentSection = null;
        let currentTop = null;
        // we will look for a section that has a distance from top < 400 but as big as possible (the numbers of the sections above are negative)
        sections.forEach(function(section){
            const distanceFromTop = section.getBoundingClientRect().top;
            if (distanceFromTop < 400 && (currentTop == null || distanceFromTop > currentTop)){
                currentSection = section;
                currentTop = distanceFromTop;
            }
        });

        // switch the css classes
        elNavbar.querySelectorAll("li[data-nav]").forEach (function(nav){
            if (currentSection!=null && nav.getAttribute("data-nav") === currentSection.getAttribute("data-nav")){ // current section may be null
                nav.classList.add(navActiveClass);
            } else{
                nav.classList.remove(navActiveClass);
            }
        });
    });
}

function setupScrolling(){
    elNavbar.addEventListener("click", function(event){
        const target = event.target;
        if (target.nodeName === 'LI') {  // ← verifies target is desired element
            const dataNav = target.getAttribute("data-nav");
            const clickedSection = document.querySelector("section[data-nav='"+dataNav+"']");
            clickedSection.scrollIntoView();
        }
    });
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


