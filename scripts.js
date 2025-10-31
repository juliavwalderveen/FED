/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
let deButton = document.querySelector("nav button");
let deUl = document.querySelector("nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.onclick = toggleMenu;

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {
  deUl.classList.toggle("toonMenu");
}

// header inklappen, met behulp van Chatgpt
let vorigeScrollPositie = window.scrollY;

window.addEventListener("scroll", () => {
  const huidigeScrollPositie = window.scrollY;
  const header = document.querySelector("header");

  if (huidigeScrollPositie > vorigeScrollPositie && huidigeScrollPositie > 80) {
    // Je scrolt naar beneden → verberg header
    header.classList.add("verberg");
  } else {
    // Je scrolt omhoog → toon header
    header.classList.remove("verberg");
  }

  vorigeScrollPositie = huidigeScrollPositie;
});

