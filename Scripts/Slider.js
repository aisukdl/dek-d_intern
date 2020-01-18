var index = 1;
var i;
var slides = document.getElementsByClassName("slider");

function next() {
    index++;
    show(index);
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" slideNext", "");
        slides[i].className = slides[i].className.replace(" fade", "");
    }
    slides[index-1].className += " slideNext";

}

function prev() {
    index--;
    show(index);
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" slideBack", "");
        slides[i].className = slides[i].className.replace(" fade", "");
    }
    slides[index-1].className += " slideBack";
}

function current(n) {
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" slideBack", "");
        slides[i].className = slides[i].className.replace(" slideNext", "");
        slides[i].className = slides[i].className.replace(" fade", "");
    }
    slides[n-1].className += " fade";
    show(index = n);
}

function show(n) {
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      index = 1
  }    
  if (n < 1) {
      index = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block"; 
  dots[index-1].className += " active";
}

show(index);