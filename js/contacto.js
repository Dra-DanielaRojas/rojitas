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

  // Función Whatsapp 
  function sendWhatsapp(){
    var phone = "+59174761884";

    var name = document.querySelector("#name").value;
    var celu = document.querySelector("#celu").value;
    var asunto = document.querySelector("#asunto").value;
    var mensaje = document.querySelector("#mensaje").value;
    
    var url = "https://wa.me/" + phone + "?text="
    + "*Nombre :* " + name + "%0a"
    + "*Celular :* " + celu + "%0a"
    + "*Asunto :* " + asunto + "%0a"
    + "*Mensaje :* " + mensaje;
    
    window.open(url, '_blank').focus();
}