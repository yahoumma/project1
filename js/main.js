const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  speed: 2000,
  spaceBetween:0,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
    },
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction : true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const btnCall = document.querySelector(".btnCall"); 
const menuMo = document.querySelector(".menuMo"); 

btnCall.onclick = function(e){
  e.preventDefault(); 

    btnCall.classList.toggle("on"); 
    menuMo.classList.toggle("on"); 
}
window.addEventListener("mousewheel", e=>{
  menuMo.classList.remove("on"); 
  btnCall.classList.remove("on");
})

window.addEventListener("touchmove", e=>{
  menuMo.classList.remove("on"); 
  btnCall.classList.remove("on");
})