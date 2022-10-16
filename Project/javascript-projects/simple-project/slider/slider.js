let slides = document.querySelectorAll(".slider-container img")
let imgsArr = [...slides]
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
let numberOfSlides = imgsArr.length;
let current = 0;

imgsArr[current].classList.add("active");

nextBtn.addEventListener("click", function(){
  current++;
  carousel()
})

prevBtn.addEventListener("click", function(){
  current--;
  carousel()
})

function carousel() {
    removeClass()
    //current++
    if (current > numberOfSlides) {
      current = 1
    } 
    if (current < 1) {
      current = numberOfSlides
    } 
  imgsArr[current - 1].classList.add("active")
  //setTimeout(carousel, 2000)
}

function removeClass() {
  imgsArr.forEach(function(img){
    img.classList.remove("active");
  })
}
