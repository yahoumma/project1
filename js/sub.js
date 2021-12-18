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

