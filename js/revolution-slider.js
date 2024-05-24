// página de tratamientos.html
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

prev.addEventListener( "click", function() {
    prevSlide();
});

next.addEventListener( "click", function() {
    nextSlide();
});

function prevSlide(){
    console.log("prev");
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index-- ;
    }
    changeSlide();
}

function nextSlide() {
    if ( index == slides.length -1) {
        index = 0
    } else {
        index++ ;
    }
    changeSlide();
}

function changeSlide() {
    slides.forEach(function (item) {
        item.classList.remove("active");
    });

    slides[index].classList.add("active"); // agrega active como label en el div. Esto ayuda activar los CSS q tengan active
    
    // código para ver los puntos activos
    let indicators = document.querySelectorAll(".indicatorContainer > div");
    indicators.forEach( function (indicator) {
        indicator.classList.remove("active");
    });
    indicators[index].classList.add("active");

    resetAutoplay();
}

// dot indicators inicio

const indicatorContainer = document.querySelector(".indicatorContainer");

function builIndicators() {
    for (let i = 0; i < slides.length; i++ ) {
        let element = document.createElement("div");
        element.dataset.i = i + 1;
        element.setAttribute("onclick", "gotoSlide(this)");
        
        if ( i == 0) {
            element.classList.add("active");

        }

        indicatorContainer.appendChild(element);

    }
}

builIndicators();

// dot indicators fin

// gotoSlide function
function gotoSlide(element) {
    let k = element.dataset.i;
    index = k - 1 ;
    changeSlide();
}

// Añadir auto play
let timer = setInterval(nextSlide, 5000);

function resetAutoplay() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
}