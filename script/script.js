// JavaScript Document
console.log("hi");

/******************************/
/* menu openen de MENU button */
/******************************/

// selecteer beide knoppen
var openButton = document.querySelector('nav button[aria-label="open menu"]');
var sluitButton = document.querySelector('nav button[aria-label="sluit menu"]');
var deNav = document.querySelector('nav');

openButton.addEventListener("click", function() {
  deNav.classList.add("toonMenu");
});

sluitButton.addEventListener("click", function() {
  deNav.classList.remove("toonMenu");
});

window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    deNav.classList.remove("toonMenu");
  }
});




// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}



var header = document.querySelector('header');

window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    header.classList.add("wit");
    header.classList.remove("doorzichtig");
  } else {
    header.classList.remove("wit");
    header.classList.add("doorzichtig");
  }
});