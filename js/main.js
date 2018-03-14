// click ouverture du Menu

const menu = document.querySelector('.nav__menu');
const navOpen = document.querySelector('.nav__open');
const navClose = document.querySelector('.nav__open__close');
const navLinks = document.querySelector('.nav__open__links');


menu.addEventListener('click', function() {
   navOpen.style.display = "block";
});

navClose.addEventListener('click', function() {
   navOpen.style.display = "none";
});

navLinks.addEventListener('click', function() {
   navOpen.style.display = "none";
});

// adapt the background color for chrome, because the multiply gives a different color on it
const is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

if (is_chrome) {
   let sectionTitle = document.querySelectorAll('.section__title');
   sectionTitle.forEach(function(item){
     item.style.backgroundColor = '#ffdaba';
   });
   let projectsField = document.querySelectorAll('.projects__field');
   projectsField.forEach(function(item){
     item.style.backgroundColor = '#ffdaba';
   });
}
