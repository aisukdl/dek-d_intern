var index = 1;

function next() {
    index++;
    show(index);
}

function prev() {
    index--;
    show(index);
}

function current(n) {
  show(index = n);
}

function show(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
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