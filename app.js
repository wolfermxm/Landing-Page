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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
//Get all section elements and add it to sectionList
const sectionList = document.querySelectorAll('section');
//Get nav element and add it to navSelect
const navSelect = document.querySelector('nav');
//Get child ul element from parent nav add it to navUl
const navUl = navSelect.querySelector('ul');



// variable represents the name of the active section
let isActive = null;



/**
 * End Global Variables

*/

// build the nav

//Loop over section elements
sectionList.forEach(function(userItem) {
  //Create anchor element and intilize its attributes
  const creatLink = document.createElement("a");
  creatLink.href = "#" + userItem.id;
  creatLink.textContent = userItem.dataset.nav;
  // creatLink.setAttribute("id",userItem.id);
  //Create li element and add class "navbar__list" to it
  const creatLi = document.createElement("li");
  //append anchor to li then li to ul
  creatLi.dataset.label=userItem.id;
  creatLi.appendChild(creatLink);
  navUl.appendChild(creatLi);


});

/**
event listener for scrolling to determine the active section
**/
document.addEventListener('scroll', function() {
  //loop over section elements
  sectionList.forEach(function(userItem) {
    //check if the section element is in the viewport
    // by comparing if element top
    if (userItem.getBoundingClientRect().top <= 50 &&
      userItem.getBoundingClientRect().bottom > 100) {
      // assigning the name of section to isActive
      isActive = userItem.id;
    }
  });

  // removing active class from all sections
  sectionList.forEach(function(userItem) {
    userItem.classList.remove("your-active-class");
  });
  if (isActive) {
    const activClass = document.getElementById(isActive);
    // // Add class 'active' to section when near top of viewport
    activClass.classList.add("your-active-class");
  }

  const anchorList = document.querySelector("nav").querySelectorAll("li");
  anchorList.forEach(function(userItem) {

    // console.log(userItem.id);
    if (userItem.dataset.label === isActive) {
      userItem.classList.add("navbar_active");

    } else {
      userItem.classList.remove("navbar_active");
    }


  });


});







var timer = null;
//hide the nav bar if user is inactive for 15 seconds
//bring nav bar back by a click event
window.addEventListener('scroll', function() {
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    document.querySelector("nav").style.display = "none";
  }, 15000);
}, false);
window.addEventListener('click', function() {
  document.querySelector("nav").style.display = "block";
});




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
