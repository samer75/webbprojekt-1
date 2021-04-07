// Initialize and add the map
function initMap() {
  // The location of Eskilstuna
  var Eskilstuna = {lat: 59.371446, lng: 16.510734};59.371446
  // The map, centered at Eskilstuna
  var map = new google.maps.Map(
      document.querySelector(".map"), {zoom: 4, center: Eskilstuna});
  // The marker, positioned at Eskilstuna
  var marker = new google.maps.Marker({position: Eskilstuna, map: map});
}


// Smooth scrolling
$("#navbar a, .btn").on("click", function(event) {

  if(this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
  }
});


// navbar Opacity

window.addEventListener("scroll", function() {
  if(window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});





