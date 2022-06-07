
//show and hide search bar
function searchBar(){
  var searchSection = document.getElementById("searchBar");
  searchSection.classList.toggle("responsive");
}

//show and hide hamburger menu
function triggerHamburger() {
  var hamburgerMenu = document.getElementById("hamburger");
  hamburgerMenu.classList.toggle("responsive");
}

//show and hide hamburger expanded menu
function triggerExpandHamburger() {
  var hamburgerExpand = document.getElementById("hamburgerExpand");
  hamburgerExpand.classList.toggle("responsive-block");
}

//show and hide mobile checkout order summary
function triggerSummary() {
  var orderSection = document.getElementById("orderSummary");
  orderSection.classList.toggle("responsive-block");
}
