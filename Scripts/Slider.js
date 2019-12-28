var index = 1;
var i;
var slides = document.getElementsByClassName("slider");

function next() {
    var i;
    index++;
    show(index);
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" slideNext", "");
    }
}

function prev() {
    index--;
    show(index);
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" slideBack", "");
    }
}

function current(n) {
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