var slideShow = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("fullSlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideShow++;
    if (slideShow> slides.length) {slideShow = 1}
   	slides[slideShow-1].style.display = "block";
   	setTimeout(showSlides, 3000); // Change image every 2 seconds
}