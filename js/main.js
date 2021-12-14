const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  speed: 2000,
  spaceBetween:0,


  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
    },
  },
 

  /*
  autoplay: {
    delay: 2000,
    disableOnInteraction : true,
  },
  */
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});







//변수 저장 
const btnCall = document.querySelector(".btnCall"); 
const menuMo = document.querySelector(".menuMo"); 

//이벤트바인딩 
//btnCall을 클릭할 때 
btnCall.onclick = function(e){
    //링크이동 금지 
  e.preventDefault(); 

  //btnCall에 on이 있으면 제거, 없으면 추가 
    btnCall.classList.toggle("on"); 
  //menuMo에 on이 있으면 제거, 없으면 추가 
    menuMo.classList.toggle("on"); 
}
window.addEventListener("mousewheel", e=>{
  menuMo.classList.remove("on"); 
  btnCall.classList.remove("on");
})