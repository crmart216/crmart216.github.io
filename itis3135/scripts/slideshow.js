let slideIndex = 1;

const showSlides = (n) => {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    let images = document.getElementsByClassName("thumb");

    if (n > slides.length) {
        n = 1;
    } else if ( n <= 0 ) {
        n = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        if ((i+1) === n) {
            slides[i].style.display = "block";
            captionText.innerText = images[i].alt;
        
        } else {
            slides[i].style.display = "none";
        }
    }
    slideIndex = n;
};

function currentSlide(n) {
    showSlides(n);
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

showSlides(slideIndex);