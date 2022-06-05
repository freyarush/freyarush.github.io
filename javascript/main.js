
function searchBar(){
  var searchSection = document.getElementById("searchBar");
  searchSection.classList.toggle("responsive");
}

function triggerHamburger() {
  var hamburgerMenu = document.getElementById("hamburger");
  hamburgerMenu.classList.toggle("responsive");
}

function triggerExpandHamburger() {
  var hamburgerExpand = document.getElementById("hamburgerExpand");
  hamburgerExpand.classList.toggle("responsive-block");
}

function triggerSummary() {
  var orderSection = document.getElementById("orderSummary");
  orderSection.classList.toggle("responsive-block");
}
