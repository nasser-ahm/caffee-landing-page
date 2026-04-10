let close = document.querySelector('.fa-x');
let navmenu = document.querySelector('.nav-menu');
let menubar = document.querySelector('.fa-bars');

close.addEventListener('click', () => {
    navmenu.classList.toggle('close');
});


menubar.addEventListener('click', () => {
    navmenu.classList.toggle('close');
})




// testmonilas slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});