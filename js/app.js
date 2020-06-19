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
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar(){
    var element
    for( let section of sections ){
        console.log(section)
        var secID   = section.id;
        var dataNav = section.dataset.nav;
        element += ` <li> <a class='menu__link ${secID}' href='#${secID}'>${dataNav}</a> </li> `;
    }
    navbarList.innerHTML = element;  
};
    

    


// Add class 'active' to section when near top of viewport


function active(){
    var scrollpos = window.scrollY;

    var section = document.querySelectorAll("section");

    window.addEventListener('scroll', function(){ 
        scrollpos = window.scrollY;
        section.forEach( element => 
            {
                if(scrollpos > element.offsetTop){
                    element.previousElementSibling.classList.remove("active")
                    element.classList.add("active");

                    var navElementclass = element.getAttribute("id");
                    var li    = document.getElementsByClassName(navElementclass);
                    var allLi = document.querySelectorAll("li a");
                    
                    allLi.forEach( a => {
                        a.classList.remove("background")
                    } )
                    console.log(allLi)
                    
                    li[0].classList.add("background")

                }
                else if( scrollpos > ( ( element.offsetTop - element.offsetHeight ) +200 )){
                    element.classList.remove("active");
                }
            }
            
        )
    });


};




// Scroll to anchor ID using scrollTO event

function scrollToSection(){

    $(".navbar__menu a").on('click', function() {
        $("html, body").animate({
        scrollTop: $($.attr(this, 'href')).offset().top}, 850);
    
        });
    
    };



window.onresize = function(){
    var li = document.querySelectorAll("li");
    if(window.innerWidth < 800){
        li.forEach(  l => {
            l.style.display = "block"
        })
    }else{
        li.forEach(  l => {
            l.style.display = "inline-block"
        })
    }
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbar();

// Scroll to section on link click
scrollToSection();

// Set sections as active
// activeClass();

active()