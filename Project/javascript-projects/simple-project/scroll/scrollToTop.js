let topBtn = document.querySelector(".up")

window.onscroll = function() {
  if(window.scrollY >= 700) {
    topBtn.style.opacity = 1
  } else {
    topBtn.style.opacity = 0
  }
};

topBtn.addEventListener("click", function(){
  window.scrollTo({
    top: 10, // 10 beacuse of margin top
    behavior: "smooth"
  });
});