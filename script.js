// menu js
const bar = document.querySelector('.bar')
const cross = document.querySelector('.cross')
const mobile__menu = document.querySelector('.mobile__menu')

bar.addEventListener('click', ()=>{
    mobile__menu.classList.toggle('show__menu')
})

cross.addEventListener('click', ()=>{
    if(mobile__menu.classList.contains('show__menu')){
        mobile__menu.classList.remove('show__menu')
    }
})

// ==========
// swiper js
var swiper = new Swiper(".instructionSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  // freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200 : {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 3
    },
    576:{
      slidesPerView: 2
    },
    0:{
      slidesPerView: 1
    }
  }
});

// ==========



$(".count__down__section")
.countdown("2023/3/14", function(event) {
  $('#day').text(
    event.strftime('%D')
  );
  $('#hours').text(
    event.strftime('%H')
  );
  $('#minutes').text(
    event.strftime('%M')
  );
  $('#seconds').text(
    event.strftime('%S')
  );
});
// ==========