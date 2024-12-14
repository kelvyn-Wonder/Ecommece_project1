function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

 //Navigation scroling Effect
 let navbar = document.querySelector('nav');

 document.addEventListener('scroll', () => {
  navScroll(false)
 })

 function navScroll(result) {
  //if the user currently viewing menu page
  if (window,scrollY > 0 && !(result)) {
    navbar.style.boxShadow = '0 5px 20px rgba(190, 190, 190, 0.15)';
    navbar.style.backgroundColor = 'white'
  }
  else {
    navbar.style.boxShadow = 'none'
    navbar.style.backgroundColor = 'transparent'
  }
 }
 
 //Menu Bar
 let menuBar = document.querySelector('#menu-bar');
 let menuPage = document.querySelector('#menu-page');
 let html = document.querySelector('html');

 //show and hide menu bar
 menuBar.addEventListener('click', () => {
    menuPage.classList.toggle('active');

    if (menuPage.classList.contains('active')){
      html.style.overflow = "hidden"
    }
    else {
      html.style.overflow = "scroll"
    }
    
 })



const scrollRevealOpton = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}


ScrollReveal().reveal(".main-text",{
  ...scrollRevealOpton,
  origin:"left",
 });


 // Function to toggle the menu for mobile screens for the home page
function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('show');
}
