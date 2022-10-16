let input = document.querySelector("input[name= 'dollar']")
let res = document.querySelector(".result");

input.oninput = function() {
  res.textContent = `The Currency by dollay is ${input.value} => By Egyptien pound is ${input.value * 18.5}`
}