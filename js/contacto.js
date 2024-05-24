let backgroundIMG = document.querySelector(".contacto-container");
let previousScrollPosition = 0;

const isScrollingDown = () => {
  let goingDown = false;
  
  let scrollPosition = window.pageYOffset;

  if (scrollPosition > previousScrollPosition) {
    goingDown = true;
  }

  previousScrollPosition = scrollPosition;
  
  return goingDown;
};

let addingPercent = 0.16


const handleScroll = () => {
    if (document.querySelector(".contacto-container").style.backgroundPositionY !== '') {
        console.log("no estaba vacío");
        if (isScrollingDown()) { //down
            backgroundIMG.style.backgroundPosition ="0% " + (addingPercent + +document.querySelector(".contacto-container").style.backgroundPositionY.substring(0, document.querySelector(".contacto-container").style.backgroundPositionY.length - 1)) + "%";
          } else { //up
              backgroundIMG.style.backgroundPosition ="0% " + (-addingPercent + +document.querySelector(".contacto-container").style.backgroundPositionY.substring(0, document.querySelector(".contacto-container").style.backgroundPositionY.length - 1)) + "%";
          }
    } else { 
        backgroundIMG.style.backgroundPosition ="0% " + (-addingPercent + +getComputedStyle(document.querySelector(".contacto-container")).backgroundPositionY.substring(0, getComputedStyle(document.querySelector(".contacto-container")).backgroundPositionY.length - 1)) + "%";
    }  
  };

  window.addEventListener("scroll", handleScroll);