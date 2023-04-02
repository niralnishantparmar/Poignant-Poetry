//what we will do: 
//Home
//Poems for when you’re sad
//Poems for when you’re happy
//Poems for Whenever
//Nature Poems


var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //displays image
  slides[slideIndex - 1].style.display = "block";
}
function plusSlides(n) {
  showSlides(slideIndex += n)
}
//https://blog.hubspot.com/website/css-fade-in?hubs_content=blog.hubspot.com%2Fwebsite%2Fcss-fade-in&hubs_content-cta=Fade-in%20Image%20Transition
